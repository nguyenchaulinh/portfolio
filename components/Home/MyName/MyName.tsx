import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import Img from "../../smallComp/image/Img";
import { heroBadges, heroQuickFacts, heroWorkNotes } from "../portfolioContent";

type MyNameProps = {
  onOpenStickerHunt: () => void;
};

export default function MyName({ onOpenStickerHunt }: MyNameProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-44 md:px-16 lg:px-20 2xl:px-72">
      <div className="hero-grid absolute inset-0 opacity-[0.03]" />

      <div className="relative grid items-start gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:gap-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-Mono text-[11px] uppercase tracking-[0.2em] text-AAsecondary mb-6"
          >
            Hanoi-based frontend engineer
          </motion.div>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="max-w-4xl font-Header text-4xl leading-[1.05] text-[#fcfcfd] sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.2rem]"
          >
            Building playful clarity for serious digital products.
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-6 max-w-2xl font-Text2 text-xl leading-relaxed text-[#e5c185] sm:text-2xl"
          >
            Nguyen Chau Linh, turning dense workflows into interfaces that feel
            friendly, fast, and trustworthy.
          </motion.p>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-[#a3b8cc] sm:text-lg"
          >
            <p>
              I&apos;m a <span className="text-white">frontend engineer</span>{" "}
              focused on <span className="text-white">clean UI</span>,{" "}
              <span className="text-white">scalable code</span>, and product
              experiences that make complex systems easier to understand.
            </p>
            <p>
              My recent work spans{" "}
              <span className="text-white">fintech platforms</span> at{" "}
              <span className="text-white">SSI Securities Corporation</span>,
              digital transformation delivery at{" "}
              <span className="text-white">NAL Viet Nam</span>, and product
              flows where speed, trust, and maintainability all matter at once.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {heroBadges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="inline-flex"
              >
                <span className="inline-flex items-center rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
              <button className="rounded bg-AAsecondary px-6 py-3.5 font-Header text-sm font-semibold uppercase tracking-wider text-[#0a0f1c] transition duration-200 hover:bg-[#f6d7a4]">
                View Resume
              </button>
            </a>

            <ReactScrollLink
              to="ProductsSection"
              spy={true}
              smooth={true}
              offset={-90}
              duration={250}
              className="inline-flex cursor-pointer items-center rounded border border-white/[0.1] bg-transparent px-6 py-3.5 font-Header text-sm font-semibold uppercase tracking-wider text-white transition duration-200 hover:bg-white/[0.04]"
            >
              See Live Products
            </ReactScrollLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="relative mx-auto w-full max-w-[500px] mt-10 xl:mt-0"
        >
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#131b2f] p-2">
              <Img
                src={"/img/portrait-face-crop-wider.png"}
                alt="Portrait crop of Nguyen Chau Linh"
                className="aspect-[4/3] w-full rounded-xl object-cover opacity-90"
              />
            </div>

            <div className="flex flex-col gap-3">
              {heroWorkNotes.map((note, index) => (
                <div
                  key={note.title}
                  className="flex flex-col rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="font-Header text-lg font-medium text-white">
                    {note.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#a3b8cc]">
                    {note.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3">
              {heroQuickFacts.map((fact, index) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 text-center transition-colors hover:bg-white/[0.04]"
                >
                  <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                    {fact.label}
                  </div>
                  <div className="mt-2 font-Header text-xl font-medium text-white">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
