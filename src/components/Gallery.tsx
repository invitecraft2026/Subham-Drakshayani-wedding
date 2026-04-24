import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import heroArch from "@/assets/hero-arch.jpg";

const images = [g1, g2, g3, g4, heroArch];

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.5em] text-saffron-deep"
          >
            ✦ MOMENTS OF GRACE ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-4 font-script text-5xl text-royal-gradient sm:text-6xl"
          >
            A Glimpse of Our Story
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl border border-gold/40 shadow-soft ${
                i === 0 ? "row-span-2 md:col-span-2" : ""
              } ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <img
                src={src}
                alt={`Wedding moment ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ aspectRatio: i === 0 ? "1/1.4" : "4/3" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/30" />
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {open !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] grid place-items-center bg-maroon/90 p-4 backdrop-blur-md"
              onClick={() => setOpen(null)}
            >
              <motion.img
                key={open}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={images[open]}
                alt=""
                className="max-h-[90vh] max-w-[95vw] rounded-2xl border-2 border-gold/60 shadow-divine"
              />
              <button
                onClick={() => setOpen(null)}
                className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-maroon shadow-gold"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
