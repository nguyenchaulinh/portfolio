import ArrowIcon from "../../Icons/ArrowIcon";
import SectionHeader from "../ArtDirection/SectionHeader";
import { caseStudies } from "../portfolioContent";

export default function SomethingIveBuilt() {
  return (
    <section
      id="SomethingIveBuiltSection"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="04"
          title="Case Studies"
          sticker="confidential notebook"
          note="Selected product stories from recent roles. The work is mostly private, so these cards focus on responsibilities, systems, and outcomes."
          lineClassName="max-w-[260px]"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="comic-panel flex flex-col rounded-[18px] p-6 sm:rounded-[26px] sm:p-8 xl:p-10"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:text-[11px]">
                    {study.eyebrow}
                  </div>
                  <h3 className="mt-2 font-Header text-xl leading-tight text-white sm:mt-3 sm:text-2xl lg:text-3xl">
                    {study.title}
                  </h3>
                </div>
              </div>

              <div className="mt-5 inline-flex rounded border border-[#e5c185]/30 bg-[#e5c185]/10 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#e5c185] w-fit">
                Confidential Work
              </div>

              <p className="mt-6 font-Text2 text-base leading-8 text-[#a3b8cc]">
                {study.summary}
              </p>

              <div className="my-8 h-[1px] w-full bg-white/[0.06]" />

              <div className="flex flex-col flex-1 justify-between gap-6">
                <div className="space-y-4">
                  {study.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <ArrowIcon
                        className={"mt-1 h-4 w-4 flex-none text-white"}
                      />
                      <span className="text-sm leading-7 text-[#a3b8cc]">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] sm:px-4 sm:py-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="comic-panel mt-10 rounded-[18px] px-6 py-5 text-center text-sm leading-7 text-[#a3b8cc] sm:rounded-[24px]">
          Detailed walkthroughs, technical decisions, and delivery context are
          available during interviews when there is room for deeper discussion.
        </div>
      </div>
    </section>
  );
}
