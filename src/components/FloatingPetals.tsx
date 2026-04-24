import { useMemo } from "react";
import petalImg from "@/assets/petal.png";

export function FloatingPetals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 14,
        size: 18 + Math.random() * 28,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((p) => (
        <img
          key={p.id}
          src={petalImg}
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `float-petal ${p.duration}s linear ${p.delay}s infinite`,
            filter: "drop-shadow(0 4px 8px rgba(200,100,40,0.3))",
          }}
        />
      ))}
    </div>
  );
}
