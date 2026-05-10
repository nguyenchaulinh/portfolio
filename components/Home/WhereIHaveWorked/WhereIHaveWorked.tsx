import { motion } from "framer-motion";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import SectionHeader from "../ArtDirection/SectionHeader";
import { experienceEntries } from "../portfolioContent";

export default function WhereIHaveWorked() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const experience = experienceEntries[activeIndex];

  return (
    <section
      id="WhereIhaveWorkedSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="02"
          title="Experience"
          sticker="timeline wall"
          note="The recent stops in my career, from early foundations to fintech product work happening now."
          lineClassName="max-w-[260px]"
        />

        <div className="mt-12">
          {/* Mobile: compact horizontal tab strip */}
          <div className="relative mb-6 xl:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {experienceEntries.map((entry, index) => (
                <button
                  key={entry.company}
                  onClick={() => setActiveIndex(index)}
                  className={`shrink-0 rounded px-4 py-2 font-Header text-sm transition duration-200 ${
                    activeIndex === index
                      ? "bg-white/[0.1] text-white"
                      : "bg-white/[0.02] text-[#a3b8cc] hover:bg-white/[0.06]"
                  }`}
                >
                  {entry.buttonLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="relative grid gap-8 xl:grid-cols-[260px_1fr]">
            {/* Desktop sidebar tabs - hidden on mobile */}
            <ExperienceTabs
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="comic-panel rounded-[18px] p-6 sm:rounded-[30px] sm:p-8 xl:p-10"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:text-[11px]">
                    {experience.company}
                  </div>
                  <h3 className="mt-2 font-Header text-xl leading-tight text-white sm:mt-3 sm:text-2xl lg:text-3xl">
                    {experience.role}
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:px-4 sm:py-2">
                  {experience.period}
                </span>
                {experience.location ? (
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:px-4 sm:py-2">
                    {experience.location}
                  </span>
                ) : null}
                {activeIndex === 0 ? (
                  <span className="rounded border border-[#e5c185]/30 bg-[#e5c185]/10 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#e5c185] sm:px-4 sm:py-2">
                    Current Role
                  </span>
                ) : null}
              </div>

              <div className="my-8 h-[1px] w-full bg-white/[0.06]" />

              <div className="grid gap-4 sm:gap-5">
                {experience.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <ArrowIcon
                      className={
                        "mt-1 h-3.5 w-3.5 flex-none text-white sm:h-4 sm:w-4"
                      }
                    />
                    <span className="text-sm leading-6 text-[#a3b8cc] sm:leading-7">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:px-4 sm:py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTabs({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="hidden space-y-4 xl:block">
      <div className="comic-panel rounded-[24px] p-4">
        <div className="px-2 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
          Select a chapter
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {experienceEntries.map((experience, index) => (
            <button
              key={experience.company}
              onClick={() => setActiveIndex(index)}
              className={`rounded-[16px] px-4 py-4 text-left transition duration-200 ${
                activeIndex === index
                  ? "bg-white/[0.06] text-white"
                  : "text-[#a3b8cc] hover:bg-white/[0.02]"
              }`}
            >
              <div className="font-Header text-lg">
                {experience.buttonLabel}
              </div>
              <div
                className={`mt-1 font-Mono text-[10px] uppercase tracking-widest ${
                  activeIndex === index ? "text-[#e5c185]" : "text-[#a3b8cc]"
                }`}
              >
                {experience.period}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="comic-panel rounded-[24px] p-5 text-sm leading-7 text-[#a3b8cc]">
        <div className="font-Header text-lg text-white">What matters most</div>
        <p className="mt-3">
          The common thread across these roles is product-facing frontend work
          where clarity, delivery quality, and business context all matter
          together.
        </p>
      </div>
    </div>
  );
}
