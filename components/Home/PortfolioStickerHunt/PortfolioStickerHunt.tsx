import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { MiniGameSticker, stickerHuntStickers } from "../portfolioContent";

const ROUND_DURATION = 20;

type PortfolioStickerHuntProps = {
  isOpen: boolean;
  onClose: () => void;
  onExploreProducts: () => void;
};

export default function PortfolioStickerHunt({
  isOpen,
  onClose,
  onExploreProducts,
}: PortfolioStickerHuntProps) {
  const prefersReducedMotion = useReducedMotion();
  const [capturedIds, setCapturedIds] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION);
  const [round, setRound] = useState(0);

  const capturedStickers = useMemo(
    () =>
      capturedIds
        .map((id) => stickerHuntStickers.find((sticker) => sticker.id === id))
        .filter(Boolean) as MiniGameSticker[],
    [capturedIds],
  );

  const isRoundFinished =
    timeLeft === 0 || capturedIds.length === stickerHuntStickers.length;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setCapturedIds([]);
    setTimeLeft(ROUND_DURATION);
  }, [isOpen, round]);

  useEffect(() => {
    if (!isOpen || isRoundFinished) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((previous) => (previous > 0 ? previous - 1 : 0));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [isOpen, isRoundFinished]);

  useEffect(() => {
    if (!isOpen || typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleCaptureSticker = (stickerId: string) => {
    if (isRoundFinished) {
      return;
    }

    setCapturedIds((current) =>
      current.includes(stickerId) ? current : [...current, stickerId],
    );
  };

  const handlePlayAgain = () => {
    setRound((current) => current + 1);
  };

  const handleExploreProducts = () => {
    onClose();
    window.setTimeout(() => onExploreProducts(), 120);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#0d1428]/80 px-4 py-6 backdrop-blur-sm">
      <div className="hero-grid absolute inset-0 opacity-[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28 }}
        className="comic-panel relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[24px] p-6 sm:rounded-[32px] sm:p-10"
      >
        <div className="relative flex max-h-[calc(92vh-2.5rem)] flex-col overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="inline-flex rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                Mini Game
              </div>

              <h3 className="mt-5 font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl">
                Portfolio Component Hunt
              </h3>
              <p className="mt-4 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc]">
                Tap or click the floating components before time runs out. Each
                piece unlocks a real fact from the products and systems behind
                this portfolio.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded bg-white/[0.06] border border-white/[0.1] px-5 py-2.5 font-Header text-xs font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
            >
              Close
            </button>
          </div>

          <div className="mt-6 grid gap-6 overflow-hidden xl:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  time left: {timeLeft}s
                </div>
                <div className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  score: {capturedIds.length}/{stickerHuntStickers.length}
                </div>
              </div>

              <div className="comic-panel relative min-h-[360px] overflow-hidden rounded-[24px] sm:min-h-[420px]">
                <div className="absolute inset-x-0 top-0 flex justify-between px-6 pt-6 text-white">
                  <div>
                    <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#a3b8cc]">
                      Play Area
                    </div>
                    <div className="mt-2 font-Header text-2xl">
                      Catch the floating parts
                    </div>
                  </div>
                </div>

                {stickerHuntStickers.map((sticker) => {
                  const isCaptured = capturedIds.includes(sticker.id);

                  return (
                    <motion.button
                      key={`${round}-${sticker.id}`}
                      type="button"
                      onClick={() => handleCaptureSticker(sticker.id)}
                      disabled={isCaptured || isRoundFinished}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={
                        isCaptured
                          ? { opacity: 0, scale: 0.5 }
                          : prefersReducedMotion
                            ? { opacity: 1, scale: 1, rotate: sticker.rotation }
                            : {
                                opacity: 1,
                                scale: 1,
                                x: [
                                  0,
                                  sticker.driftX,
                                  0,
                                  sticker.driftX * -0.5,
                                  0,
                                ],
                                y: [
                                  0,
                                  sticker.driftY * -1,
                                  0,
                                  sticker.driftY * 0.35,
                                  0,
                                ],
                                rotate: [
                                  sticker.rotation,
                                  sticker.rotation + 3,
                                  sticker.rotation - 2,
                                  sticker.rotation,
                                ],
                              }
                      }
                      transition={
                        isCaptured
                          ? { duration: 0.18 }
                          : prefersReducedMotion
                            ? { duration: 0.2 }
                            : {
                                duration: sticker.duration,
                                delay: sticker.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }
                      }
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : { scale: 1.04, y: -4, rotate: sticker.rotation }
                      }
                      className={`absolute min-w-[110px] rounded-[16px] border border-white/[0.12] bg-white/[0.04] px-4 py-4 text-left backdrop-blur-sm transition duration-150 ${
                        isCaptured ? "pointer-events-none" : ""
                      }`}
                      style={{ top: sticker.top, left: sticker.left }}
                    >
                      <div className="font-Header text-lg font-medium text-white">
                        {sticker.label}
                      </div>
                      <div className="mt-1 font-Mono text-[10px] uppercase tracking-[0.18em] text-[#a3b8cc]">
                        tap to capture
                      </div>
                    </motion.button>
                  );
                })}

                {isRoundFinished ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0a0f1c]/60 px-6 backdrop-blur-sm">
                    <div className="comic-panel max-w-md rounded-[24px] px-8 py-8 text-center">
                      <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#a3b8cc]">
                        round complete
                      </div>
                      <div className="mt-4 font-Header text-3xl text-white">
                        You captured {capturedIds.length} components.
                      </div>
                      <p className="mt-4 font-Text2 text-sm leading-7 text-[#a3b8cc]">
                        This is meant to be a small delight layer, revealing
                        more context about the real work behind the portfolio.
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex max-h-[60vh] flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-Mono text-[10px] uppercase tracking-[0.22em] text-[#a3b8cc]">
                    Captured Items
                  </div>
                  <div className="mt-2 font-Header text-2xl text-white">
                    Portfolio facts unlocked
                  </div>
                </div>
                <div className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  {capturedIds.length === 0
                    ? "start catching"
                    : `${capturedIds.length} captured`}
                </div>
              </div>

              <div className="mt-6 flex-1 overflow-y-auto pr-2">
                {capturedStickers.length === 0 ? (
                  <div className="rounded-[16px] border border-white/[0.06] bg-white/[0.02] px-5 py-5 font-Text2 text-sm leading-7 text-[#a3b8cc]">
                    Catch a component to reveal a real product or experience
                    note here. You can use this as a tour of the work without
                    leaving the homepage.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {capturedStickers.map((sticker, index) => (
                      <motion.div
                        key={`${round}-${sticker.id}-pinned`}
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.22, delay: index * 0.04 }}
                        className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] px-5 py-5"
                      >
                        <div className="mb-3 inline-flex rounded border border-[#e5c185]/30 bg-[#e5c185]/10 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#e5c185]">
                          {sticker.label}
                        </div>
                        <p className="font-Text2 text-sm leading-7 text-[#a3b8cc]">
                          {sticker.fact}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handlePlayAgain}
              className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-3 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
            >
              Play Again
            </button>

            <button
              type="button"
              onClick={handleExploreProducts}
              className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-3 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
            >
              Explore Products
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-3 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
            >
              View Resume
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
