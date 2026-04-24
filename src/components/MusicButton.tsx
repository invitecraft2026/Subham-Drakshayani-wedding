import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL =
  "https://cdn.pixabay.com/download/audio/2022/03/15/audio_270f49b83d.mp3?filename=indian-flute-meditation-amp-yoga-music-7-minutes-of-soothing-music-for-relaxation-7615.mp3";

export function MusicButton({ autoStart }: { autoStart: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (autoStart && !playing) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }, [autoStart, playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute music" : "Play music"}
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold glow-pulse transition-transform hover:scale-110"
    >
      <span className="absolute inset-1 rounded-full bg-cream/80 backdrop-blur-sm" />
      <span className="relative text-saffron-deep">
        {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
      </span>
    </button>
  );
}
