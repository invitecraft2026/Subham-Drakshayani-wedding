import { motion } from "framer-motion";
import heroArch from "@/assets/hero-arch.jpg";
import goldOrnament from "@/assets/gold-ornament.png";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroArch}
          alt="Royal floral wedding arch"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/10 to-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Corner ornaments */}
      <img
        src={goldOrnament}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-32 w-32 opacity-80 sm:h-48 sm:w-48"
      />
      <img
        src={goldOrnament}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 -scale-x-100 opacity-80 sm:h-48 sm:w-48"
      />
      <img
        src={goldOrnament}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 -scale-y-100 opacity-80 sm:h-48 sm:w-48"
      />
      <img
        src={goldOrnament}
        alt=""
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 -scale-100 opacity-80 sm:h-48 sm:w-48"
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-[10px] tracking-[0.6em] text-saffron-deep sm:text-xs"
        >
          ✦ A SACRED JAIN UNION ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 font-script text-7xl leading-none text-royal-gradient sm:text-8xl md:text-[11rem]"
        >
          Drakshayani
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="my-4 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-24" />
          <span className="font-display text-sm tracking-[0.4em] text-gold-gradient sm:text-base">
            WEDS
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-24" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-script text-7xl leading-none text-royal-gradient sm:text-8xl md:text-[11rem]"
        >
          Subham
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2 }}
          className="mt-10 font-serif-elegant text-lg italic text-maroon/80 sm:text-xl"
        >
          A Sacred Jain Wedding Celebration
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2 text-saffron-deep">
            <span className="font-display text-[10px] tracking-[0.4em]">SCROLL</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="block h-10 w-px bg-gradient-to-b from-saffron-deep to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
