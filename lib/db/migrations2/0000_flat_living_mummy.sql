DO $$ BEGIN
 CREATE TYPE "public"."vocal_type" AS ENUM('Male', 'Female', 'No preference');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "song_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"genre" text NOT NULL,
	"occasion" text NOT NULL,
	"style" text NOT NULL,
	"vocal" text NOT NULL,
	"story" text NOT NULL,
	"must_includes" text[],
	"referral_source" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "songs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"songName" text NOT NULL,
	"song_description" text,
	"song_image" text,
	"song_url" text,
	"duration" integer NOT NULL,
	"album_name" text NOT NULL,
	"album_description" text,
	"album_image" text,
	"artist" text NOT NULL,
	"artist_country" text NOT NULL,
	"artist_bio" text,
	"artist_image" text,
	"occasion" text NOT NULL,
	"genre" text NOT NULL,
	"style" text NOT NULL,
	"vocal" "vocal_type" NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
