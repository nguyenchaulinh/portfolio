import { motion } from "framer-motion";

const loaderCards = [
  {
    title: "Sticker board",
    text: "pinning playful details",
    className: "bg-[#fff6df] text-[#17223f]",
  },
  {
    title: "Live products",
    text: "lining up real work",
    className: "bg-[#c7fbf4] text-[#17223f]",
  },
  {
    title: "Case notes",
    text: "tidying the story",
    className: "bg-[#ffd7cf] text-[#17223f]",
  },
  {
    title: "Finishing touch",
    text: "adding tiny sparkles",
    className: "bg-[#eef7ff] text-[#17223f]",
  },
];

export default function PlayfulLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 0.98,
        transition: { duration: 0.45, ease: "easeOut" },
      }}
      className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-AAprimary px-4"
    >
      <div className="hero-grid absolute inset-0 opacity-[0.03]" />

      <div className="relative w-full max-w-3xl">
        <div className="comic-panel overflow-hidden rounded-[24px] px-6 py-8 sm:rounded-[32px] sm:px-10 sm:py-10">
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                loading
              </div>

              <h2 className="mt-6 max-w-2xl font-Header text-3xl leading-tight text-white sm:text-4xl">
                Preparing the portfolio...
              </h2>

              <p className="mt-5 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc] sm:text-lg">
                Loading structural elements, aligning layouts, and fetching case
                studies.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {loaderCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    opacity: { delay: index * 0.08, duration: 0.28 },
                    y: { delay: index * 0.1, duration: 0.28 },
                  }}
                  className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] px-4 py-5"
                >
                  <div className="font-Header text-lg font-medium text-white">
                    {card.title}
                  </div>
                  <div className="mt-2 font-Mono text-[10px] uppercase tracking-[0.22em] text-[#a3b8cc]">
                    {card.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-full border border-white/[0.12] bg-white/[0.08] p-1">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "115%" }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="loader-sweep h-3 w-[55%] rounded-full"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-left">
                <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#a3b8cc]">
                  system pre-flight
                </div>
                <div className="mt-2 font-Header text-sm text-white">
                  hero, components, live products
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
