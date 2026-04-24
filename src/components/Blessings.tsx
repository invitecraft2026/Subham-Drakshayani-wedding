import { motion } from "framer-motion";
import goldOrnament from "@/assets/gold-ornament.png";

export function Blessings() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-gradient-divine opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120vh] w-[120vh] -translate-x-1/2 -translate-y-1/2 opacity-10 slow-spin">
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, transparent 40%, oklch(0.78 0.14 80 / 0.6) 60%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.img
          src={goldOrnament}
          alt=""
          aria-hidden
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto h-20 w-20 rotate-45"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="mt-8 font-script text-5xl leading-[1.15] text-royal-gradient sm:text-6xl md:text-7xl"
        >
          “Your presence and blessings will make our celebration complete.”
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
          <span className="font-display text-xs tracking-[0.5em] text-saffron-deep">
            WITH LOVE & GRATITUDE
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>
      </div>
    </section>
  );
}
