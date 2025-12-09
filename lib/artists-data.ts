export interface Artist {
  id: string
  slug: string
  name: string
  bio: string
  genre: string[]
  image: string
  coverImage: string
  streams: number
  songs: number
  videos: number[]
  socialLinks: {
    instagram?: string
    twitter?: string
    spotify?: string
    youtube?: string
  }
  colorScheme: {
    primary: string
    accent: string
    gradient: string
  }
  tracks: Track[]
}

export interface Track {
  id: string
  title: string
  duration: string
  plays: number
}

export const artists: Artist[] = [
  {
    id: "1",
    slug: "Franky_Wright",
    name: "Franky Wright",
    bio: "Electronic music pioneer blending futuristic sounds with emotional depth. Known for innovative production techniques and boundary-pushing collaborations.",
    genre: ["Electronic", "House", "Techno"],
    image: "/placeholder.svg?key=hq3k7",
    coverImage: "/placeholder.svg?key=y5uq8",
    streams: 5200000,
    songs: 24,
    videos: [1, 2, 3],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.6 0.25 290)",
      accent: "oklch(0.65 0.25 190)",
      gradient: "from-purple-600 to-cyan-400",
    },
    tracks: [
      { id: "1", title: "Neon Dreams", duration: "3:45", plays: 125000 },
      { id: "2", title: "Digital Sunrise", duration: "4:12", plays: 98000 },
      { id: "3", title: "Quantum Loop", duration: "3:28", plays: 87000 },
    ],
  },
  {
    id: "2",
    slug: "Beverly_Hills",
    name: "Beverly Hills",
    bio: "Hip-hop virtuoso crafting lyrical masterpieces with soulful beats. Multi-Grammy winner bringing authenticity and innovation to modern rap.",
    genre: ["Hip-Hop", "Rap", "Soul"],
    image: "/placeholder.svg?key=nka3w",
    coverImage: "/placeholder.svg?key=hldl5",
    streams: 8900000,
    songs: 31,
    videos: [4, 5, 6],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.65 0.22 30)",
      accent: "oklch(0.7 0.2 60)",
      gradient: "from-amber-600 to-orange-500",
    },
    tracks: [
      { id: "1", title: "Golden Era", duration: "3:32", plays: 215000 },
      { id: "2", title: "Street Wisdom", duration: "4:05", plays: 189000 },
      { id: "3", title: "Rhythm Keeper", duration: "3:18", plays: 167000 },
    ],
  },
  {
    id: "3",
    slug: "MC_Da_Hills",
    name: "MC Da-Hills",
    bio: "Urban music legend with a unique blend of storytelling and production. Creating tracks that resonate with millions globally.",
    genre: ["Urban", "Rap", "R&B"],
    image: "/placeholder.svg?key=irulr",
    coverImage: "/placeholder.svg?key=8ovzu",
    streams: 7600000,
    songs: 28,
    videos: [7, 8, 9],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.6 0.24 0)",
      accent: "oklch(0.65 0.23 220)",
      gradient: "from-red-600 to-blue-600",
    },
    tracks: [
      { id: "1", title: "City Lights", duration: "3:50", plays: 178000 },
      { id: "2", title: "Urban Pulse", duration: "3:42", plays: 154000 },
      { id: "3", title: "Soul Streets", duration: "4:20", plays: 143000 },
    ],
  },
  {
    id: "4",
    slug: "Obi_Golden",
    name: "Obi Golden",
    bio: "Afrobeats sensation revolutionizing global music. Grammy-nominated artist bringing African rhythms to the world stage.",
    genre: ["Afrobeats", "Pop", "Dance"],
    image: "/placeholder.svg?key=qu3fe",
    coverImage: "/placeholder.svg?key=fu9at",
    streams: 12300000,
    songs: 35,
    videos: [10, 11, 12],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.65 0.22 80)",
      accent: "oklch(0.68 0.2 140)",
      gradient: "from-yellow-600 to-green-500",
    },
    tracks: [
      { id: "1", title: "Africa Rising", duration: "3:35", plays: 287000 },
      { id: "2", title: "Dancing Soul", duration: "3:48", plays: 256000 },
      { id: "3", title: "Global Beat", duration: "4:02", plays: 234000 },
    ],
  },
  {
    id: "5",
    slug: "Queen_Idia",
    name: "Queen - Idia",
    bio: "Visionary pop artist pushing creative boundaries. Known for experimental production and genre-bending collaborations.",
    genre: ["Pop", "Experimental", "Synth-Pop"],
    image: "/placeholder.svg?key=0p1hu",
    coverImage: "/placeholder.svg?key=dlfhj",
    streams: 9800000,
    songs: 26,
    videos: [13, 14, 15],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.65 0.25 320)",
      accent: "oklch(0.62 0.24 310)",
      gradient: "from-pink-600 to-purple-500",
    },
    tracks: [
      { id: "1", title: "Neon Paradise", duration: "3:56", plays: 203000 },
      { id: "2", title: "Digital Love", duration: "3:38", plays: 198000 },
      { id: "3", title: "Synthetic Dreams", duration: "4:15", plays: 176000 },
    ],
  },
  {
    id: "6",
    slug: "Jojo_The_Creator",
    name: "Jojo The Creator",
    bio: "Producer and artist extraordinaire creating cinematic soundscapes. Specializing in film scores and immersive audio experiences.",
    genre: ["Cinematic", "Electronic", "Ambient"],
    image: "/artist-jojo-the-creator-film-score-composer.jpg",
    coverImage: "/cinematic-production-studio-with-cool-blue-and-tea.jpg",
    streams: 6400000,
    songs: 22,
    videos: [16, 17, 18],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.55 0.22 200)",
      accent: "oklch(0.65 0.25 190)",
      gradient: "from-blue-600 to-teal-500",
    },
    tracks: [
      { id: "1", title: "Cinematic Journey", duration: "5:12", plays: 145000 },
      { id: "2", title: "Ethereal Realms", duration: "4:48", plays: 132000 },
      { id: "3", title: "Ambient Horizons", duration: "6:20", plays: 118000 },
    ],
  },
  {
    id: "7",
    slug: "Franklin_Ugwu",
    name: "Franklin Ugwu",
    bio: "Contemporary music producer blending traditional and modern sounds. Creating authentic productions that celebrate cultural diversity.",
    genre: ["World Music", "Pop", "Fusion"],
    image: "/artist-franklin-ugwu-world-music-producer.jpg",
    coverImage: "/cultural-fusion-music-studio-with-warm-and-cool-to.jpg",
    streams: 5900000,
    songs: 20,
    videos: [19, 20, 21],
    socialLinks: {
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
    },
    colorScheme: {
      primary: "oklch(0.62 0.23 40)",
      accent: "oklch(0.65 0.22 200)",
      gradient: "from-orange-600 to-blue-500",
    },
    tracks: [
      { id: "1", title: "Cultural Bridge", duration: "4:10", plays: 167000 },
      { id: "2", title: "World Harmony", duration: "3:55", plays: 154000 },
      { id: "3", title: "Fusion Soul", duration: "4:28", plays: 141000 },
    ],
  },
]
