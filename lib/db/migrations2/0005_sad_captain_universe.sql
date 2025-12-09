DO $$ BEGIN
 CREATE TYPE "public"."status_enum" AS ENUM('draft', 'published');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "songs" ADD COLUMN "status" "status_enum" NOT NULL;