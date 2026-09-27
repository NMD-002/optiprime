"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { teamCredits } from "../teamCredits";
import { leadership } from "../leadership";
import TeamSection from "./TeamSection";

export default function Team() {
  return (
    <>
      <HeroSection />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
          Our Team
        </h1>
        <TeamSection team={{ members: leadership }}></TeamSection>
        {teamCredits.map((team, id) => (
          <TeamSection key={id} team={team} />
        ))}
      </main>
    </>
  );
}
