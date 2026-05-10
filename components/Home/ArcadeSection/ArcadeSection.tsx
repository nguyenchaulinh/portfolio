import Link from "next/link";
import ArrowIcon from "../../Icons/ArrowIcon";

type ArcadeGame = {
  title: string;
  emoji: string;
  description: string;
  href: string;
  colorClass: string;
  auraClass: string;
  tapeClass: string;
  rotation: string;
};

const arcadeGames: ArcadeGame[] = [
  {
    title: "Memory Flip",
    emoji: "🃏",
    description:
      "Flip cards and match emoji pairs before time runs out. Train your memory with cartoon flair!",
    href: "/arcade/memory",
    colorClass: "bg-[#fff6df]",
    auraClass: "bg-[#ffcf6e]/20",
    tapeClass: "bg-[#ffcf6e]/80",
    rotation: "rotate-[-2deg]",
  },
  {
    title: "Whack-a-Mole",
    emoji: "🐹",
    description:
      "Furry critters pop up from their holes — whack as many as you can in 30 seconds!",
    href: "/arcade/whack",
    colorClass: "bg-[#c7fbf4]",
    auraClass: "bg-[#85e7dc]/20",
    tapeClass: "bg-[#85e7dc]/80",
    rotation: "rotate-[1.5deg]",
  },
  {
    title: "Emoji Catcher",
    emoji: "🧺",
    description:
      "Emojis rain from the sky — move your basket to catch the good ones and dodge the bombs!",
    href: "/arcade/catcher",
    colorClass: "bg-[#ffd7cf]",
    auraClass: "bg-[#ff8b92]/20",
    tapeClass: "bg-[#ff8b92]/80",
    rotation: "rotate-[-1deg]",
  },
];

export default function ArcadeSection() {
  return (
    <section
      id="ArcadeSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="hero-grid absolute inset-0 opacity-[0.03]" />

      <div className="relative">
        {/* Section header */}
        <div className="flex flex-row items-center">
          <ArrowIcon className="h-5 w-5 flex-none translate-y-[2px] text-AAsecondary md:h-6 md:w-5" />
          <div className="flex-none items-center pr-2">
            <span className="font-Mono text-sm text-AAsecondary sm:text-xl">
              {" "}
              🕹️
            </span>
            <span className="pl-3 font-Header text-lg font-medium tracking-wide text-[#fcfcfd] md:text-2xl">
              Arcade Corner
            </span>
          </div>
          <div className="h-[1px] w-full bg-white/[0.06] md:w-1/2 xl:w-1/3" />
        </div>

        {/* Intro */}
        <div className="mt-10 max-w-3xl">
          <h3 className="mt-6 max-w-2xl font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl lg:text-5xl">
            Take a break — try a mini game!
          </h3>
          <p className="mt-5 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc] sm:text-lg">
            These bite-sized arcade games are built with React, pure CSS
            animations, and zero dependencies. They showcase interactive UI,
            game-loop patterns, and state management — all inside this Next.js
            portfolio.
          </p>
        </div>

        {/* Game cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {arcadeGames.map((game, index) => (
            <ArcadeCard key={game.title} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArcadeCard({ game, index }: { game: ArcadeGame; index: number }) {
  return (
    <div>
      <Link href={game.href}>
        <article className="comic-panel group relative cursor-pointer overflow-hidden rounded-[18px] p-6 transition duration-300 hover:bg-white/[0.06] sm:rounded-[26px] sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] text-4xl">
              {game.emoji}
            </span>
            <span className="text-3xl opacity-50">🎯</span>
          </div>

          <h4 className="mt-6 font-Header text-2xl leading-tight text-[#fcfcfd]">
            {game.title}
          </h4>
          <p className="mt-3 font-Text2 text-sm leading-7 text-[#a3b8cc]">
            {game.description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded bg-white/[0.06] border border-white/[0.1] px-5 py-2.5 font-Header text-xs font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 group-hover:bg-white/[0.1]">
            <span>Play Now</span>
            <span>→</span>
          </div>
        </article>
      </Link>
    </div>
  );
}
