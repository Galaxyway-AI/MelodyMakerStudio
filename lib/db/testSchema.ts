import { sql } from "drizzle-orm";
import {
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date())
    .notNull(),
});

export const vocalType = pgEnum("vocal_type", [
  "Male",
  "Female",
  "No preference",
]);
export const statusEnum = pgEnum("status_enum", ["draft", "published"]);

export const songs = pgTable("songs", {
  id: uuid("id").defaultRandom().primaryKey(),
  songName: text("songName").notNull(),
  songDescription: text("song_description"),
  songImage: text("song_image"),
  songUrl: text("song_url"),
  duration: numeric("duration", { precision: 10, scale: 2 }).notNull(),

  albumName: text("album_name").notNull(),
  albumDescription: text("album_description"),
  albumImage: text("album_image"),

  artist: text("artist").notNull(),
  artistCountry: text("artist_country").notNull(),
  artistBio: text("artist_bio"),
  artistImage: text("artist_image"),

  occasion: text("occasion").notNull(),
  genre: text("genre").notNull(),
  style: text("style").notNull(),
  vocal: vocalType("vocal").notNull(),

  status: statusEnum("status").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date())
    .notNull(),
});

export const songRequests = pgTable("song_requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  genre: text("genre").notNull(),
  occasion: text("occasion").notNull(),
  style: text("style").notNull(),
  vocal: text("vocal").notNull(),
  story: text("story").notNull(),
  mustIncludes: text("must_includes").array(),
  referralSource: text("referral_source"),
  extraAddons: text("extra_addons").notNull(),
  expressService: text("express_service").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .$onUpdate(() => new Date())
    .notNull(),
});

// export const artists = pgTable("artists", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   name: text("name").notNull(),
//   bio: text("bio").notNull(),
//   country: text("country").notNull(),
//   cover_image_url: text("cover_image_url"),
//   created_at: timestamp("created_at", { withTimezone: true })
//     .defaultNow()
//     .notNull(),
//   updated_at: timestamp("updated_at", { withTimezone: true })
//     .default(sql`CURRENT_TIMESTAMP`)
//     .$onUpdate(() => new Date())
//     .notNull(),
// });

// export const albums = pgTable("albums", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   artist_id: uuid("artist_id")
//     .notNull()
//     .references(() => artists.id),
//   name: text("name").notNull(),
//   cover_image_url: text("cover_image_url"),
//   created_at: timestamp("created_at", { withTimezone: true })
//     .notNull()
//     .defaultNow(),
//   updated_at: timestamp("updated_at", { withTimezone: true })
//     .default(sql`CURRENT_TIMESTAMP`)
//     .$onUpdate(() => new Date())
//     .notNull(),
// });

// export const songs = pgTable("songs", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   album_id: uuid("album_id")
//     .notNull()
//     .references(() => albums.id),
//   artist_id: uuid("artist_id")
//     .notNull()
//     .references(() => artists.id),
//   name: text("name").notNull(),
//   duration: integer("duration").notNull(),
//   genre: text("genre").notNull(),
//   song_url: text("song_url"),
//   cover_image_url: text("cover_image_url"),
//   created_at: timestamp("created_at", { withTimezone: true })
//     .notNull()
//     .defaultNow(),
//   updated_at: timestamp("updated_at", { withTimezone: true })
//     .default(sql`CURRENT_TIMESTAMP`)
//     .$onUpdate(() => new Date())
//     .notNull(),
// });

// export const artistsRelations = relations(artists, ({ many }) => ({
//   albums: many(albums),
//   songs: many(songs),
// }));

// export const albumsRelations = relations(albums, ({ one, many }) => ({
//   artist: one(artists, {
//     fields: [albums.artist_id],
//     references: [artists.id],
//   }),
//   songs: many(songs),
// }));

// export const songsRelations = relations(songs, ({ one }) => ({
//   album: one(albums, { fields: [songs.album_id], references: [albums.id] }),
//   artist: one(artists, { fields: [songs.artist_id], references: [artists.id] }),
// }));

// export const mediaType = pgEnum("media_type", ["image", "audio"]);

// export const mediaTable = pgTable("media", {
//   id: uuid("id").defaultRandom().primaryKey(),
//   type: mediaType("type").notNull(),
//   image_url: text("image_url"),
//   audio_url: text("audio_url"),
//   artist_id: uuid("artist_id").references(() => artists.id),
//   album_id: uuid("album_id").references(() => albums.id),
//   song_id: uuid("song_id").references(() => songs.id),
//   created_at: timestamp("created_at", { withTimezone: true })
//     .notNull()
//     .defaultNow(),
//   updated_at: timestamp("updated_at", { withTimezone: true })
//     .default(sql`CURRENT_TIMESTAMP`)
//     .$onUpdate(() => new Date())
//     .notNull(),
// });

export type User = typeof users.$inferSelect;
export type Song = typeof songs.$inferSelect;
export type SongRequest = typeof songRequests.$inferSelect;
// export type Artist = typeof artists.$inferSelect;
// export type Album = typeof albums.$inferSelect;
// export type MediaTable = typeof mediaTable.$inferSelect;
