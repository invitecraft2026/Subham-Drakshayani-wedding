import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "/inkam.mpeg";

export function MusicButton({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio(MUSIC_URL);

    audio.loop = true;

    // Reduced volume here (0.0 to 1.0)
    // 0.15 = soft background music
    audio.volume = 0.10;

    audioRef.current = audio;

    // Sync state when audio is paused/played manually
    const handlePlay = () => setPlaying(true);
    const handlePause = () => setPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Auto play only once when autoStart becomes true
    if (autoStart && !playing) {
      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked:", err);
          setPlaying(false);
        });
    }
  }, [autoStart]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (playing) {
        audio.pause();
        audio.currentTime = audio.currentTime; // keeps position
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (error) {
      console.log("Audio toggle error:", error);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold glow-pulse transition-transform hover:scale-110"
    >
      <span className="absolute inset-1 rounded-full rounded-full bg-cream/80 backdrop-blur-sm" />

      <span className="relative text-saffron-deep">
        {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </span>
    </button>
  );
}