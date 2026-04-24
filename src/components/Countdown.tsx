import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-05-03T18:00:00+05:30").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const [t, setT] = useState(diff());
  useEffect(() => {
    const i = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-xs tracking-[0.5em] text-saffron-deep"
        >
          ✦ THE AWAITED DAY ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-4 font-script text-5xl text-royal-gradient sm:text-6xl md:text-7xl"
        >
          Counting the Moments
          <br />
          Until Forever Begins
        </motion.h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-gold opacity-30 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gold/50 glass-gold p-6 shadow-soft">
                <div className="absolute inset-0 shimmer opacity-30" />
                <div className="relative">
                  <div className="font-display text-5xl font-semibold text-gold-gradient sm:text-6xl">
                    {String(it.value).padStart(2, "0")}
                  </div>
                  <div className="mt-2 font-display text-[10px] tracking-[0.4em] text-saffron-deep sm:text-xs">
                    {it.label.toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
