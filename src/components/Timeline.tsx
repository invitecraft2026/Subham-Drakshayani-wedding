import { motion } from "framer-motion";
import { Flame, Heart, Flower2, Sparkles, Sun, Music } from "lucide-react";

const events = [
  {
    date: "3rd May 2026",
    items: [
      { icon: Heart, time: "Evening · 6:00 PM", title: "Engagement", desc: "Sacred exchange of vows of togetherness" },
      { icon: Flower2, time: "Followed by", title: "Haldi Function", desc: "A celebration in turmeric and joy" },
    ],
  },
  {
    date: "4th May 2026",
    items: [
      { icon: Sun, time: "Morning · 8:00 AM", title: "Saptapadi", desc: "Seven sacred steps around the holy fire" },
      { icon: Flame, time: "Auspicious · 12:28 PM", title: "Vivah Muhurat", desc: "The blessed moment of union" },
      { icon: Music, time: "Evening", title: "Reception", desc: "An evening of celebration & blessings" },
    ],
  },
];

export function Timeline() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.5em] text-saffron-deep"
          >
            ✦ ORDER OF CEREMONIES ✦
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-4 font-script text-5xl text-royal-gradient sm:text-6xl"
          >
            The Sacred Journey
          </motion.h2>
        </div>

        <div className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold to-transparent sm:left-1/2" />

          {events.map((day, di) => (
            <div key={di} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 flex justify-center"
              >
                <div className="rounded-full border border-gold/60 glass-gold px-6 py-2">
                  <span className="font-display text-sm tracking-[0.3em] text-saffron-deep">
                    {day.date.toUpperCase()}
                  </span>
                </div>
              </motion.div>

              <div className="space-y-8">
                {day.items.map((it, i) => {
                  const Icon = it.icon;
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * i }}
                      className={`relative flex items-start gap-6 sm:gap-0 ${
                        isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                      }`}
                    >
                      {/* Icon node */}
                      <div className="relative z-10 flex w-12 flex-shrink-0 justify-center sm:w-1/2">
                        <div
                          className={`relative ${isLeft ? "sm:mr-0" : "sm:ml-0"}`}
                          style={{
                            marginRight: isLeft ? 0 : undefined,
                            marginLeft: isLeft ? undefined : 0,
                          }}
                        >
                          <div className="absolute inset-0 -m-3 rounded-full bg-gradient-gold opacity-50 blur-md" />
                          <div className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-gold shadow-gold">
                            <Icon size={20} className="text-maroon" />
                          </div>
                        </div>
                      </div>

                      {/* Card */}
                      <div className="flex-1 sm:w-1/2 sm:px-8">
                        <div className="relative overflow-hidden rounded-2xl border border-gold/40 glass-gold p-6 shadow-soft">
                          <div className="absolute -right-6 -top-6 opacity-20">
                            <Sparkles size={80} className="text-gold" />
                          </div>
                          <p className="font-display text-[10px] tracking-[0.3em] text-saffron-deep">
                            {it.time.toUpperCase()}
                          </p>
                          <h3 className="mt-2 font-script text-3xl text-royal-gradient">
                            {it.title}
                          </h3>
                          <p className="mt-2 font-serif-elegant italic text-muted-foreground">
                            {it.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
