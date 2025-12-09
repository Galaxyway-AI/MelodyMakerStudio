"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import type { Song } from "@/lib/db/firestore-schema";

import { editSong } from "@/actions/editSong";
import { uploadFile } from "@/actions/uploadFile";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";



const songGenres = [
  "Pop",
  "R&B",
  "Blues",
  "Easy Listening",
  "Soul",
  "HipHop",
  "Folk",
  "EDM",
  "Rock",
  "Indie",
  "Country",
  "Classical",
  "Heavy Metal",
  "Rap",
  "Afrobeat",
  "Reggae",
  "J-Pop",
  "House",
  "Jazz",
  "Disco",
  "Electronic",
  "Jingles",
  "Instrumentals",
  "A cappella",
  "Trance",
  "Gospel",
];
const songStyles = [
  "Love",
  "Funny",
  "Happy",
  "Sad",
  "Aggressive",
  "Bum Shaker",
  "Informative",
];
const songVocals = ["Male", "Female", "No preference"];

const occasions = [
  "Anniversary",
  "Birthday",
  "Wedding",
  "Corporate",
  "For a Partner",
  "To Say I love you",
  "For a Crush",
  "Loving Memory",
  "Funeral",
  "Valentine’s",
  "Christmas",
];



const formSchema = z.object({
  songName: z.string().min(1, { message: "Required" }),
  songDescription: z.string(),
  songUrl: z.instanceof(File).optional(),
  duration: z.coerce.number().gt(0, { message: "Required" }),
  songImage: z.instanceof(File).optional(),

  albumName: z.string().min(1, {
    message: "Required",
  }),
  albumImage: z.instanceof(File).optional(),
  albumDescription: z.string(),

  artist: z.string().min(1, { message: "Required" }),
  artistImage: z.instanceof(File).optional(),
  artistCountry: z.string().min(1, {
    message: "Required",
  }),
  artistBio: z.string(),

  genre: z.string().min(1, {
    message: "Required",
  }),
  style: z.string().min(1, {
    message: "Required",
  }),
  // vocal: z.enum(["Male", "Female", "No preference"]),
  vocal: z.string().min(1, {
    message: "Required",
  }),
  occasion: z.string().min(1, {
    message: "Required",
  }),
});

export function EditSongForm({ song }: { song: Song }) {
  const {
    id,
    songName,
    songDescription,
    songUrl: audioSongUrl,
    duration,
    songImage: songImageUrl,

    artist,
    artistImage: artistImageUrl,
    artistCountry,
    artistBio,

    albumName,
    albumImage: albumImageUrl,
    albumDescription,

    genre,
    style,
    vocal,
    occasion,
  } = song;

  console.log({ songName });

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      songName,
      songDescription: songDescription || undefined,
      songUrl: undefined,
      duration: Number(duration),
      songImage: undefined,

      albumName,
      albumImage: undefined,
      albumDescription: albumDescription || undefined,

      artist,
      artistImage: undefined,
      artistCountry,
      artistBio: artistBio || undefined,

      genre,
      style,
      vocal,
      occasion,
    },
    mode: "onChange",
  });

  const { user } = useAuth();

  async function uploadFileViaServer(file: File, type: "image" | "audio") {
    const formData = new FormData();
    formData.append("file", file);

    const timestamp = Date.now();
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
    const path = `${type}/${user!.uid}/${timestamp}_${sanitizedName}`;

    formData.append("path", path);

    const result = await uploadFile(formData);
    return result;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("ON SUBMIT STARTED");
    console.log(values);

    if (!user) {
      toast.error("You must be logged in to edit a song");
      return;
    }

    try {
      setIsLoading(true);

      const {
        songName,
        songDescription,
        songUrl,
        duration,
        songImage,

        artist,
        artistImage,
        artistCountry,
        artistBio,

        albumName,
        albumImage,
        albumDescription,

        genre,
        style,
        vocal,
        occasion,
      } = values;

      const urls: Record<string, string> = {};

      // Upload artist cover image
      if (artistImage) {
        if (artistImage.size > 10 * 1024 * 1024) {
          setIsLoading(false);
          toast.error("Artist image must be less than 10MB");
          return;
        }
        const result = await uploadFileViaServer(artistImage, "image");
        if (result.error || !result.url) {
          setIsLoading(false);
          toast.error(`Error uploading artist image: ${result.error}`);
          return;
        }
        urls["artistImage"] = result.url;
      }

      // Upload album cover image
      if (albumImage) {
        if (albumImage.size > 10 * 1024 * 1024) {
          setIsLoading(false);
          toast.error("Album image must be less than 10MB");
          return;
        }
        const result = await uploadFileViaServer(albumImage, "image");
        if (result.error || !result.url) {
          setIsLoading(false);
          toast.error(`Error uploading album image: ${result.error}`);
          return;
        }
        urls["albumImage"] = result.url;
      }

      // Upload song cover image
      if (songImage) {
        if (songImage.size > 10 * 1024 * 1024) {
          setIsLoading(false);
          toast.error("Song image must be less than 10MB");
          return;
        }
        const songImageResult = await uploadFileViaServer(songImage, "image");
        if (songImageResult.error || !songImageResult.url) {
          setIsLoading(false);
          toast.error(`Error uploading song image: ${songImageResult.error}`);
          return;
        }
        urls["songImage"] = songImageResult.url;
      }

      // Upload audio file
      if (songUrl) {
        const audioResult = await uploadFileViaServer(songUrl, "audio");
        if (audioResult.error || !audioResult.url) {
          setIsLoading(false);
          toast.error(`Error uploading audio file: ${audioResult.error}`);
          return;
        }
        urls["audioSong"] = audioResult.url;
      }

      console.log("UPLOADING FILES ENDED");

      console.log("EDIT SONG STARTED");
      const createSongRes = await editSong({
        id,
        songName,
        songDescription: songDescription === "" ? undefined : songDescription,
        songUrl: urls["audioSong"] || audioSongUrl,
        songImage: urls["songImage"] || songImageUrl,
        duration: duration,

        artist,
        artistBio: artistBio === "" ? undefined : artistBio,
        artistCountry,
        artistImage: urls["artistImage"] || artistImageUrl,

        albumName,
        albumDescription: albumDescription === "" ? undefined : albumDescription,
        albumImage: urls["albumImage"] || albumImageUrl,

        occasion,
        genre,
        style,
        // @ts-expect-error: vocal type
        vocal,
      });

      console.log({ createSongRes });

      if (createSongRes.error || !createSongRes.data) {
        setIsLoading(false);
        toast.error(
          `Error: Something went wrong while storing the song data. ${createSongRes.error}`
        );
        return;
      }

      console.log("EDIT SONG ENDED");

      setIsLoading(false);
      console.log("ON SUBMIT ENDED");

      toast.success(`SUCCESS: Song edited successfully`);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        `Error: Something went wrong. ${(error as Error).message}`
      );
    }
  }

  return (
    <Card className="mx-auto max-w-[700px]">
      <CardHeader>
        <CardTitle>Add A New Song</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="albumName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Album Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter album name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="albumImage"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Album Image</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type="file"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                        accept="image/*"
                      // accept="image/*, application/pdf"
                      // accept="image/jpeg,image/png,image/webp,audio/mpeg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="albumDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Album Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write something about the album..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="artist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Artist Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter artist name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="artistImage"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Artist Cover Image</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type="file"
                        // accept="image/*, application/pdf"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                        accept="image/*"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="artistCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter artist country..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="artistBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Artist Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write something about the artist..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="songName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Song Title/Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter song title..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="songUrl"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Upload Audio</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type="file"
                        accept="audio/*"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="songDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Song Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write something about the song..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Song Duration</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter song duration..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="songImage"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel>Song Cover Image</FormLabel>
                    <FormControl>
                      <Input
                        {...fieldProps}
                        type="file"
                        accept="image/*"
                        onChange={(event) =>
                          onChange(event.target.files && event.target.files[0])
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Song Type/Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {songGenres.map((genre, i) => (
                          <SelectItem
                            className="cursor-pointer hover:bg-secondary"
                            key={i}
                            value={genre}
                          >
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="occasion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Occasion</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {occasions.map((occasion, i) => (
                          <SelectItem
                            className="cursor-pointer hover:bg-secondary"
                            key={i}
                            value={occasion}
                          >
                            {occasion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="style"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Style</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Style" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {songStyles.map((genre, i) => (
                          <SelectItem
                            className="cursor-pointer hover:bg-secondary"
                            key={i}
                            value={genre}
                          >
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vocal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vocal</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Vocal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {songVocals.map((genre, i) => (
                          <SelectItem
                            className="cursor-pointer hover:bg-secondary"
                            key={i}
                            value={genre}
                          >
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              size="lg"
              disabled={isLoading}
              className="w-full"
              type="submit"
            >
              {isLoading && <ReloadIcon className="mr-2 size-4 animate-spin" />}
              {isLoading ? "Editing" : "Edit"}
            </Button>
          </form>
        </Form>
        {/* <Button
          onClick={handleArtistDelete}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading && <ReloadIcon className="mr-2 size-4 animate-spin" />}
          Delete
        </Button> */}
      </CardContent>
    </Card>
  );
}
