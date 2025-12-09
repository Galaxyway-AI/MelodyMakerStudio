"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { createRequestedSong } from "@/actions/createRequestedSong";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

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
const referralSource = [
  "Search engine",
  "TikTok",
  "Facebook",
  "Word of mouth",
  "Other Social Media",
];

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

const extraAddons = [
  "Photos with Slideshows ($25 Extra)",
  "Stream on platforms  ($25 Extra)",
  "Stream on Multiple Platforms ($50 Extra)",
  "Add on Memory Card (Extra $30)",
  "No Thanks",
];
const expressServices = ["Ready in 24 Hours ( Extra $30)", "No Thanks"];

const formSchema = z.object({
  name: z.string().min(1, { message: "Please enter your name" }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  genre: z.string().optional(),
  occasion: z.string().optional(),
  style: z.string().optional(),
  vocal: z.string().optional(),
  story: z.string().optional(),
  mustIncludes: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .optional(),

  extraAddons: z.string().optional(),
  expressService: z.string().optional(),

  referralSource: z.string().optional(),
});

export function MakeMySongForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      genre: "",
      occasion: "",
      style: "",
      vocal: "",
      story: "",
      mustIncludes: [{ value: "" }],
      referralSource: "",
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    name: "mustIncludes",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // console.log(values);
    try {
      const resData = await createRequestedSong({
        ...values,
        mustIncludes: values.mustIncludes?.map((item) => item.value),
      });

      if (resData.error) {
        throw new Error(resData.error);
      }

      setIsLoading(false);

      toast.success(
        "SUCCESS: Your request has been submitted successfully. We will contact you soon. Thanks for believing in us.",
        {
          duration: 20000,
        }
      );
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(
        `Error: Something went wrong while processing the request. Please try again. ${(error as Error).message}`
      );
    }
  }

  return (
    <Card className="mx-auto max-w-[700px]">
      <CardHeader>
        <h2 className="border-b pb-2 text-2xl lg:text-3xl font-semibold tracking-tight mb-4 text-center">
          🔖Sale offer. 💰 Make any song for only $49💸
        </h2>
        <CardTitle className="text-xl lg:text-2xl">Make My Song</CardTitle>
        <CardDescription>
          To make a song for you we need some information. Please try to give us
          all the information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                        {songGenres.sort().map((genre, i) => (
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

            <FormField
              control={form.control}
              name="story"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Story</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="This is where you tell us everything we need to know to include in the lyrics. Be detailed and personal. How did you meet? Any funny moments you’ve shared? Pets' names? Cute habits? Give us all the little details."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`mustIncludes.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      Must include
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Choose 5 details of the story that must be included in the
                      song, we can&#39;t include every detail of the story but
                      we always fit as much in as possible.
                    </FormDescription>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder={`Type ${["first", "second", "third", "fourth", "fifth"][index]} include`}
                        />
                      </FormControl>
                      {index !== 0 && (
                        <Button
                          onClick={() => remove(index)}
                          size="icon"
                          variant="outline"
                        >
                          <X />
                        </Button>
                      )}
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            {fields.length < 5 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append({ value: "" })}
              >
                Include another
              </Button>
            )}

            {/* <div className="grid grid-cols-2 gap-4"> */}
            <FormField
              control={form.control}
              name="extraAddons"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Extra Addons</FormLabel>
                  <FormDescription>
                    Add extra service you require with the song. We can place
                    your song on over 40 music streaming platforms including
                    Spotify, TikTok, Apple Music, Meta, YouTube Music, Amazon
                    Music, and more.
                  </FormDescription>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a addons" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {extraAddons.map((genre, i) => (
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
              name="expressService"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Express Service?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {expressServices.map((genre, i) => (
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
            {/* </div> */}

            <FormField
              control={form.control}
              name="referralSource"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Where did you hear about us?</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select one" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {referralSource.map((genre, i) => (
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
              {isLoading ? "Submitting" : "Submit"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
