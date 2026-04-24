import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroScreen } from "@/components/IntroScreen";
import { HeroSection } from "@/components/HeroSection";
import { Countdown } from "@/components/Countdown";
import { ScratchCard } from "@/components/ScratchCard";
import { Timeline } from "@/components/Timeline";
import { Venue } from "@/components/Venue";
import { Blessings } from "@/components/Blessings";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { MusicButton } from "@/components/MusicButton";
import { FloatingPetals } from "@/components/FloatingPetals";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drakshayani & Subham · A Sacred Jain Wedding" },
      {
        name: "description",
        content:
          "Together with the blessings of family, we invite you to celebrate the sacred union of Drakshayani & Subham · 3rd & 4th May 2026 · Nilambika Mangala Karyalaya.",
      },
      { property: "og:title", content: "Drakshayani & Subham · Jain Wedding" },
      {
        property: "og:description",
        content:
          "A divine celebration on 3rd & 4th May 2026 at Nilambika Mangala Karyalaya.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-gradient-cream text-foreground">
      <AnimatePresence>
        {!opened && <IntroScreen onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <>
          <FloatingPetals count={12} />
          <MusicButton autoStart />
          <HeroSection />
          <Countdown />
          <ScratchCard />
          <Timeline />
          <Venue />
          <Blessings />
          <Gallery />
          <Footer />
        </>
      )}
    </main>
  );
}
