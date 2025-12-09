"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Mic, Radio, Zap } from "lucide-react"
import { usePlayer } from "@/contexts/player-context"

export default function MusicPlayer() {
  const {
    currentTrack,
    playlist,
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    togglePlay,
    playNext,
    playPrev,
    setVolume,
    toggleMute,
    seek,
    playTrack
  } = usePlayer()

  const [isListening, setIsListening] = useState(false)
  const [voiceCommand, setVoiceCommand] = useState("")
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false)

  if (!currentTrack) return null

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = Number.parseFloat(e.target.value)
    seek(newTime)
  }

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleVoiceCommand = () => {
    setIsListening(true)
    setTimeout(() => {
      setIsListening(false)
      const commands = ["Next track", "Play", "Pause", "Previous", "Volume up"]
      setVoiceCommand(commands[Math.floor(Math.random() * commands.length)])

      // Simulate command processing
      setTimeout(() => {
        setVoiceCommand("")
      }, 2000)
    }, 1500)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-card via-card/95 to-card/80 border-t border-border backdrop-blur-lg pb-safe">

      <div className="px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <div className="flex items-center gap-2 max-w-7xl mx-auto">
          <span className="text-xs text-foreground/60 w-8">{formatTime(currentTime)}</span>
          <div className="flex-1 relative group">
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1 bg-muted rounded-full appearance-none cursor-pointer accent-primary hover:accent-accent transition-all"
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
            ></div>
          </div>
          <span className="text-xs text-foreground/60 w-8 text-right">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Main Player */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Track Info with Playlist Toggle */}
          <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setShowPlaylist(!showPlaylist)}>
            <p className="text-sm font-bold text-foreground truncate hover:text-accent transition-colors">
              {currentTrack.songName}
            </p>
            <p className="text-xs text-foreground/60 truncate">{currentTrack.artist}</p>
          </div>

          <div className="flex items-center gap-3 px-4">
            <button
              onClick={playPrev}
              className="p-2 hover:bg-muted rounded-lg transition-all hover:shadow-lg hover:shadow-primary/30"
              title="Previous track"
            >
              <SkipBack size={18} className="text-foreground/80 hover:text-primary transition-colors" />
            </button>

            <button
              onClick={togglePlay}
              className="p-3 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-110"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={18} className="fill-white text-white" />
              ) : (
                <Play size={18} className="fill-white text-white ml-0.5" />
              )}
            </button>

            <button
              onClick={playNext}
              className="p-2 hover:bg-muted rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30"
              title="Next track"
            >
              <SkipForward size={18} className="text-foreground/80 hover:text-accent transition-colors" />
            </button>

            <button
              onClick={() => setShowVoiceAssistant(!showVoiceAssistant)}
              className={`p-2 rounded-lg transition-all ml-2 ${isListening || showVoiceAssistant
                  ? "bg-accent/20 text-accent"
                  : "hover:bg-muted text-foreground/80 hover:text-accent"
                }`}
              title="Voice Assistant"
            >
              <Radio size={18} className={isListening ? "animate-pulse" : ""} />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 pl-4 border-l border-border">
            <button
              onClick={toggleMute}
              className="p-2 hover:bg-muted rounded-lg transition-all"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX size={18} className="text-foreground/80" />
              ) : (
                <Volume2 size={18} className="text-foreground/80" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(Number.parseInt(e.target.value))
              }}
              className="w-20 h-1 bg-muted rounded-full appearance-none cursor-pointer accent-primary hidden sm:inline-block"
              title="Volume"
            />
          </div>
        </div>
      </div>

      {showPlaylist && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 border-t border-border pt-3">
          <p className="text-xs font-semibold text-foreground/70 mb-2 uppercase">Now Playing Queue</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-h-32 overflow-y-auto">
            {playlist.map((track) => (
              <button
                key={track.id}
                onClick={() => playTrack(track)}
                className={`text-xs p-2 rounded-lg transition-all text-left truncate ${track.id === currentTrack.id
                    ? "bg-gradient-to-r from-primary to-accent text-white font-semibold"
                    : "bg-muted hover:bg-muted/80 text-foreground/70 hover:text-foreground"
                  }`}
              >
                {track.songName}
              </button>
            ))}
          </div>
        </div>
      )}

      {showVoiceAssistant && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 border-t border-border pt-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-accent mb-2 flex items-center gap-2">
                <Zap size={14} /> AI Voice Assistant
              </p>
              {isListening ? (
                <p className="text-sm text-foreground animate-pulse">Listening...</p>
              ) : voiceCommand ? (
                <p className="text-sm text-foreground">
                  Command: <span className="text-accent font-semibold">{voiceCommand}</span>
                </p>
              ) : (
                <p className="text-xs text-foreground/60">Click the mic icon to give voice commands</p>
              )}
            </div>
            <button
              onClick={handleVoiceCommand}
              disabled={isListening}
              className={`p-3 rounded-full transition-all ${isListening
                  ? "bg-accent/30 text-accent cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 text-white"
                }`}
              title="Activate Voice Command"
            >
              <Mic size={18} className={isListening ? "animate-pulse" : ""} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
