import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

export function Venue() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.5em] text-saffron-deep"
          >
            ✦ THE SACRED VENUE ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-4 font-script text-5xl text-royal-gradient sm:text-6xl"
          >
            Where We Unite
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-12"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-gold opacity-30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border-2 border-gold/50 glass-gold shadow-divine">
            <div className="grid md:grid-cols-2">
              <div className="p-8 sm:p-12">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold shadow-gold">
                  <MapPin className="text-maroon" size={24} />
                </div>
                <h3 className="mt-6 font-script text-4xl text-royal-gradient sm:text-5xl">
                  Nilambika
                  <br />
                  Mangala Karyalaya
                </h3>
                <p className="mt-3 font-kannada text-xl text-maroon">
                  ನೀಲಾಂಬಿಕಾ ಮಂಗಲ ಕಾರ್ಯಾಲಯ
                </p>
                <div className="my-6 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
                <p className="font-serif-elegant italic leading-relaxed text-muted-foreground">
                  Join us at this divine setting where tradition meets
                  togetherness. The blessings of family and friends will
                  illuminate every moment.
                </p>
                <a
                  href="https://maps.app.goo.gl/eUaDCcheuk2ysgqS7?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-royal px-7 py-3 font-display text-xs tracking-[0.3em] text-cream shadow-gold transition-transform hover:scale-105"
                >
                  VIEW LOCATION
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="relative min-h-[320px]">
                <iframe
                  title="Venue map"
                  src="https://www.google.com/maps?q=Nilambika+Mangala+Karyalaya&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, filter: "sepia(0.15) saturate(1.1)" }}
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/40" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
