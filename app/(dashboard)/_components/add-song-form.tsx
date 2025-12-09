"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { createSong } from "@/actions/createSong";
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
  song_title: z.string().min(1, { message: "Required" }),
  songDescription: z.string(),
  song_audio: z.instanceof(File, { message: "Audio file is required" }),
  song_cover_image: z.instanceof(File, { message: "Cover image is required" }),

  artist: z.string().min(1, { message: "Required" }),

  genre: z.string().min(1, {
    message: "Required",
  }),
  vocal: z.string().min(1, {
    message: "Required",
  }),
  occasion: z.string().min(1, {
    message: "Required",
  }),
});

export function AddSongForm() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      song_title: "",
      songDescription: "",
      song_audio: undefined,
      song_cover_image: undefined,

      artist: "",

      genre: "",
      vocal: "",
      occasion: "",
    },
    mode: "onChange",
  });

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
      toast.error("You must be logged in to add a song");
      return;
    }

    try {
      setIsLoading(true);
      console.log("Starting submission process...");

      const {
        song_title,
        songDescription,
        song_audio,
        song_cover_image,

        artist,

        genre,
        vocal,
        occasion,
      } = values;

      const urls: Record<string, string> = {};

      console.log("UPLOADING FILES STARTED");

      // Upload song cover image
      if (song_cover_image.size > 10 * 1024 * 1024) {
        setIsLoading(false);
        toast.error("Song image must be less than 10MB");
        return;
      }
      console.log("Uploading song cover image...", song_cover_image.name);
      const songImageResult = await uploadFileViaServer(song_cover_image, "image");
      console.log("Song cover image upload result:", songImageResult);

      if (songImageResult.error || !songImageResult.url) {
        setIsLoading(false);
        console.error("Song image upload failed:", songImageResult.error);
        toast.error(`Error uploading song image: ${songImageResult.error}`);
        return;
      }
      urls["songImage"] = songImageResult.url;

      // Upload audio file
      console.log("Uploading audio file...", song_audio.name);
      const audioResult = await uploadFileViaServer(song_audio, "audio");
      console.log("Audio file upload result:", audioResult);

      if (audioResult.error || !audioResult.url) {
        setIsLoading(false);
        console.error("Audio upload failed:", audioResult.error);
        toast.error(`Error uploading audio file: ${audioResult.error}`);
        return;
      }
      urls["audioSong"] = audioResult.url;

      console.log("UPLOADING FILES ENDED. URLs:", urls);

      console.log("CREATE SONG STARTED");
      const songData = {
        songName: song_title,
        songDescription: songDescription === "" ? undefined : songDescription,
        songUrl: urls["audioSong"],
        songImage: urls["songImage"],

        artist,

        occasion,
        genre,
        vocal: vocal as "Male" | "Female" | "No preference",
        status: "draft" as const,
      };
      console.log("Sending song data to server:", songData);

      const createSongRes = await createSong(songData);

      console.log("Create song response:", createSongRes);

      if (createSongRes.error || !createSongRes.data) {
        setIsLoading(false);
        console.error("Create song failed:", createSongRes.error);
        toast.error(
          `Error: Something went wrong while storing the song data. ${createSongRes.error}`
        );
        return;
      }

      console.log("CREATE SONG ENDED SUCCESS");

      console.log(values);
      setIsLoading(false);
      console.log("ON SUBMIT ENDED");

      toast.success(`SUCCESS: Song added successfully`);
      form.reset();
    } catch (error) {
      console.error("Submission error caught:", error);
      setIsLoading(false);
      toast.error(
        `Error: Something went wrong while uploading files or storing song data. ${(error as Error).message}`
      );
    }
  }

  function onInvalid(errors: any) {
    console.log("FORM VALIDATION ERRORS:", errors);
    toast.error("Please check the form for errors. Make sure all required fields are filled and files are uploaded.");
  }

  return (
    <Card className="mx-auto max-w-[700px]">
      <CardHeader>
        <CardTitle>Add A New Song</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-4">

            <FormField
              control={form.control}
              name="song_title"
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
                name="song_audio"
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
              <FormField
                control={form.control}
                name="song_cover_image"
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

            <Button
              size="lg"
              disabled={isLoading}
              className="w-full"
              type="submit"
            >
              {isLoading && <ReloadIcon className="mr-2 size-4 animate-spin" />}
              {isLoading ? "Adding" : "Add"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
