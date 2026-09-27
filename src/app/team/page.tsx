"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { teamCredits, leadership } from "../page";
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

      {/* <div className="flex flex-col gap-32 pb-24">
        <section
          id="team"
          className="container mx-auto scroll-mt-24 px-6 lg:px-12"
        >
          <div className="mb-12 flex flex-col items-start gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-primary">
              Team
            </span>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              The engineers behind OptiPrime.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10">
            <div className="relative flex min-h-[280px] items-end overflow-hidden bg-background p-8">
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-white/[0.03]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-widest text-primary">
                  Team photo
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  OptiPrime 2026
                </h3>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 lg:grid-cols-[1.15fr_1fr]">
              <div className="bg-background p-6 md:p-8">
                <p className="mb-5 text-xs uppercase tracking-widest text-muted-foreground">
                  Leads
                </p>
                <div className="grid gap-4">
                  {leadership.map((member) => (
                    <div
                      key={`${member.name}-${member.role}`}
                      className="grid gap-1 border-b border-white/10 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[180px_1fr]"
                    >
                      <h3 className="text-sm font-semibold tracking-tight text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-px bg-white/10">
                {teamCredits.map((group) => (
                  <div key={group.division} className="bg-background p-6">
                    <p className="mb-4 text-xs uppercase tracking-widest text-primary">
                      {group.division}
                    </p>
                    <ul className="grid gap-2">
                      {group.members.map((member) => (
                        <li
                          key={`${group.division}-${member.name}`}
                          className="flex flex-col gap-0.5 text-sm text-muted-foreground sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                        >
                          <span>{member.name}</span>
                          {member.role && (
                            <span className="text-[10px] uppercase tracking-widest text-primary/80">
                              {member.role}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}
