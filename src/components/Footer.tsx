import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-transparent to-maroon/20 px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto"
      >
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-cream shadow-gold">
          <div className="font-script text-4xl text-gold-gradient leading-none">
            D<span className="mx-0.5 text-2xl text-saffron-deep">&</span>S
          </div>
        </div>
        <p className="mt-6 font-script text-3xl text-royal-gradient">
          Drakshayani &amp; Subham
        </p>
        <p className="mt-2 font-serif-elegant italic text-muted-foreground">
          3<sup>rd</sup> &amp; 4<sup>th</sup> May 2026 · Nilambika Mangala Karyalaya
        </p>
        <p className="mt-8 font-display text-[10px] tracking-[0.4em] text-saffron-deep/70">
          ✦ JAI JINENDRA ✦
        </p>
      </motion.div>
    </footer>
  );
}
