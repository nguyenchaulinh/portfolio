import { motion } from "framer-motion";
import { forwardRef } from "react";
import Img from "../../../components/smallComp/image/Img";
import SectionHeader from "../ArtDirection/SectionHeader";
import { aboutPrincipleCards, aboutSkillClusters } from "../portfolioContent";

interface AboutMeProps {}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((_props, ref) => {
  return (
    <section
      ref={ref}
      id="aboutSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="01"
          title="About Me"
          sticker="story board"
          note="A quick look at how I think about frontend work, collaboration, and the kind of product problems I enjoy solving."
          lineClassName="max-w-[220px]"
        />

        <div className="mt-12 grid gap-6 sm:gap-10 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4 sm:space-y-6">
            <div className="comic-panel flex flex-col justify-center rounded-[18px] p-6 sm:rounded-[30px] sm:p-10">
              <div className="inline-flex rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc] w-fit">
                how I work
              </div>

              <h3 className="mt-6 max-w-xl font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl">
                I like making complicated systems feel calm and understandable.
              </h3>

              <div className="mt-6 space-y-5 font-Text2 text-base leading-8 text-[#a3b8cc]">
                <p>
                  Hi, I&apos;m Chau Linh. Over the last{" "}
                  <span className="text-white font-medium">7+ years</span>,
                  I&apos;ve worked across fintech and digital product teams,
                  building trading platforms, internal tools, onboarding
                  journeys, and business-facing interfaces that have to stay
                  clear under pressure.
                </p>
                <p>
                  My recent work includes{" "}
                  <span className="text-white font-medium">
                    real-time stock trading products
                  </span>{" "}
                  at{" "}
                  <span className="text-white font-medium">
                    SSI Securities Corporation
                  </span>{" "}
                  and{" "}
                  <span className="text-white font-medium">
                    digital transformation delivery
                  </span>{" "}
                  for Japanese clients at{" "}
                  <span className="text-white font-medium">NAL Viet Nam</span>.
                </p>
                <p>
                  What keeps me motivated is the mix of thoughtful engineering,
                  fast product feedback, and the challenge of turning dense
                  workflows into UI that feels simple on the surface.
                </p>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {aboutPrincipleCards.map((card) => (
                <motion.div
                  key={card.title}
                  className="comic-panel rounded-[18px] px-5 py-5 sm:rounded-[26px]"
                >
                  <div className="font-Header text-lg font-medium text-white">
                    {card.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#a3b8cc]">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <figure className="comic-panel relative mx-auto w-full max-w-[420px] rounded-[22px] p-3 sm:rounded-[34px] sm:p-4">
              <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-[#131b2f]">
                <Img
                  src={"/img/portrait.jpeg"}
                  className={
                    "h-[360px] w-full object-cover object-top opacity-90"
                  }
                  alt="Portrait of Nguyen Chau Linh"
                />
              </div>

              <figcaption className="px-3 pb-3 pt-6">
                <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  Profile Card
                </div>
                <div className="mt-2 font-Header text-2xl leading-tight text-white">
                  Frontend engineer with a product mindset
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#a3b8cc]">
                  I care about the moment when a dense business tool starts
                  feeling easy to use for the people who depend on it every day.
                </p>
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutSkillClusters.map((cluster) => (
                <motion.div
                  key={cluster.title}
                  className="comic-panel rounded-[18px] p-5 sm:rounded-[26px]"
                >
                  <div className="font-Header text-lg font-medium text-white">
                    {cluster.title}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cluster.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="comic-panel w-full rounded-[18px] px-5 py-5 text-sm leading-7 text-[#a3b8cc] sm:rounded-[26px]">
                <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#e5c185]">
                  Good fit
                </div>
                <p className="mt-3 max-w-sm">
                  Teams building thoughtful digital products, especially when UI
                  clarity, delivery quality, and cross-functional collaboration
                  all matter at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
