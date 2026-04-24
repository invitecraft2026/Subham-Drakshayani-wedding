import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Gold gradient overlay
    const grad = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    grad.addColorStop(0, "#e8c46e");
    grad.addColorStop(0.5, "#b8862c");
    grad.addColorStop(1, "#e8c46e");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Floral pattern overlay
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.font = "28px serif";
    for (let y = 30; y < rect.height; y += 60) {
      for (let x = 30; x < rect.width; x += 60) {
        ctx.fillText("✿", x, y);
      }
    }
    ctx.fillStyle = "rgba(80,30,10,0.85)";
    ctx.font = "bold 18px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ SCRATCH TO REVEAL ✦", rect.width / 2, rect.height / 2 - 10);
    ctx.font = "italic 14px Cormorant Garamond, serif";
    ctx.fillText("Wedding Date & Venue", rect.width / 2, rect.height / 2 + 14);
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 36, 0, Math.PI * 2);
    ctx.fill();

    // Check progress occasionally
    if (Math.random() < 0.1) {
      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let cleared = 0;
      for (let i = 3; i < img.data.length; i += 4) if (img.data[i] === 0) cleared++;
      if (cleared / (img.data.length / 4) > 0.45) setRevealed(true);
    }
  };

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-xs tracking-[0.5em] text-saffron-deep"
        >
          ✦ A LITTLE SURPRISE ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-4 font-script text-5xl text-royal-gradient sm:text-6xl"
        >
          Reveal the Sacred Date
        </motion.h2>
        <p className="mt-3 font-serif-elegant italic text-muted-foreground">
          Gently scratch the golden card below
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-md sm:aspect-[5/4]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-gold opacity-40 blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-3xl border-2 border-gold/60 bg-gradient-cream shadow-divine">
            {/* Hidden content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <Sparkles className="text-saffron-deep" size={28} />
              <h3 className="mt-3 font-script text-4xl text-royal-gradient sm:text-5xl">
                3<sup className="text-2xl">rd</sup> & 4<sup className="text-2xl">th</sup> May 2026
              </h3>
              <div className="my-4 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="font-display text-base font-semibold text-saffron-deep sm:text-lg">
                Nilambika Mangala Karyalaya
              </p>
              <p className="mt-1 font-kannada text-sm text-maroon">
                ನೀಲಾಂಬಿಕಾ ಮಂಗಲ ಕಾರ್ಯಾಲಯ
              </p>
              <p className="mt-4 font-serif-elegant text-xs italic text-muted-foreground sm:text-sm">
                Engagement • Saptapadi • Vivah Muhurat • Reception
              </p>
            </div>

            {!revealed && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 h-full w-full cursor-grab touch-none rounded-3xl"
                onMouseDown={() => (isDrawing.current = true)}
                onMouseUp={() => (isDrawing.current = false)}
                onMouseLeave={() => (isDrawing.current = false)}
                onMouseMove={(e) => isDrawing.current && scratch(e.clientX, e.clientY)}
                onTouchStart={(e) => {
                  isDrawing.current = true;
                  const t = e.touches[0];
                  scratch(t.clientX, t.clientY);
                }}
                onTouchMove={(e) => {
                  const t = e.touches[0];
                  scratch(t.clientX, t.clientY);
                }}
                onTouchEnd={() => (isDrawing.current = false)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
