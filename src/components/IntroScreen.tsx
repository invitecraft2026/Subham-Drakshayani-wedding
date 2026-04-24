import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import mandalaBg from "@/assets/mandala-bg.jpg";
import { GoldParticles } from "./GoldParticles";
import { FloatingPetals } from "./FloatingPetals";

export function IntroScreen({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-50 overflow-hidden"
    >
      {/* Mandala background */}
      <div className="absolute inset-0">
        <img
          src={mandalaBg}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/40 via-saffron-deep/30 to-maroon/60" />
      </div>

      {/* Slow rotating mandala accent */}
      <div className="absolute left-1/2 top-1/2 h-[150vh] w-[150vh] -translate-x-1/2 -translate-y-1/2 opacity-20 slow-spin">
        <div
          className="h-full w-full"
          style={{
            background: `radial-gradient(circle, transparent 30%, oklch(0.85 0.15 80 / 0.3) 60%, transparent 70%)`,
          }}
        />
      </div>

      <GoldParticles count={50} />
      <FloatingPetals count={14} />

      {/* Diya glows in corners */}
      {[
        { left: "8%", bottom: "10%" },
        { right: "8%", bottom: "10%" },
        { left: "12%", top: "12%" },
        { right: "12%", top: "12%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute h-32 w-32 rounded-full diya-flicker"
          style={{
            ...pos,
            background:
              "radial-gradient(circle, oklch(0.9 0.18 70 / 0.6) 0%, oklch(0.7 0.2 50 / 0.2) 40%, transparent 70%)",
          }}
        />
      ))}

      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mb-8"
        >
          <p className="font-display text-xs tracking-[0.5em] text-gold-light">
            JAIN WEDDING CELEBRATION
          </p>
        </motion.div>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 -m-8 rounded-full bg-gradient-divine opacity-40 blur-2xl" />
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-gold/60 bg-cream/10 backdrop-blur-sm">
            <div className="absolute inset-2 rounded-full border border-gold/40" />
            <div className="font-script text-7xl text-gold-gradient leading-none">
              D<span className="mx-1 text-5xl text-cream/80">&</span>S
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="font-script text-6xl text-cream sm:text-7xl md:text-8xl"
          style={{ textShadow: "0 4px 24px oklch(0.4 0.15 30 / 0.6)" }}
        >
          Drakshayani &amp; Subham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.4 }}
          className="mt-6 max-w-xl font-serif-elegant text-base italic text-cream/90 sm:text-lg"
        >
          Together with the blessings of family, we invite you to celebrate
          the sacred union of
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpen}
          className="group relative mt-12 overflow-hidden rounded-full bg-gradient-gold px-10 py-4 font-display text-sm tracking-[0.35em] text-maroon shadow-divine glow-pulse"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Sparkles size={16} className="text-maroon" />
            TAP TO OPEN INVITATION
            <Sparkles size={16} className="text-maroon" />
          </span>
          <span className="absolute inset-0 shimmer" />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 2.6 }}
          className="mt-6 font-serif-elegant text-xs italic text-cream/70"
        >
          ✦ With divine blessings ✦
        </motion.p>
      </div>
    </motion.div>
  );
}
