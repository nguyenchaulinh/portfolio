import { useEffect, useState } from "react";
import SectionHeader from "../ArtDirection/SectionHeader";

export default function GetInTouch() {
  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent) && /wv/.test(userAgent)) {
      setIsAndroidWebView(true);
    }
  }, []);

  return (
    <section
      id="GetInTouchSection"
      data-aos="fade-up"
      className="relative overflow-hidden bg-AAprimary px-4 py-16 sm:px-16 sm:py-20 md:px-16 lg:px-24 2xl:px-72"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          number="05"
          title="Get In Touch"
          sticker="open inbox"
          note="I am always happy to talk about frontend roles, product teams, and thoughtful digital experiences."
          lineClassName="max-w-[220px]"
        />

        <div className="comic-panel mt-12 overflow-hidden rounded-[20px] p-6 sm:rounded-[30px] sm:p-10">
          <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
            <div className="space-y-6">
              <div className="comic-panel rounded-[18px] p-6 sm:rounded-[26px] sm:p-8">
                <div className="inline-flex rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  collaboration welcome
                </div>

                <h3 className="mt-6 font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl">
                  If you think we should build something together, my inbox is
                  open.
                </h3>

                <p className="mt-5 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc]">
                  I am especially interested in product-facing frontend work,
                  fintech systems, and teams that care about thoughtful
                  engineering as much as user clarity.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                    Hanoi
                  </span>
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                    Frontend Engineering
                  </span>
                  <span className="rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                    Product Systems
                  </span>
                </div>
              </div>

              <div className="comic-panel rounded-[18px] px-6 py-5 text-sm leading-7 text-[#a3b8cc] sm:rounded-[26px]">
                Recruiters, product teams, and collaborators are all welcome. If
                the work involves clear interfaces, complex systems, or
                meaningful product delivery, I am interested.
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="comic-panel rounded-[18px] p-6 sm:rounded-[26px] sm:p-8">
                <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                  Best way to reach me
                </div>

                <div className="mt-4 break-all font-Header text-2xl leading-tight text-[#fcfcfd] sm:break-normal sm:text-3xl">
                  nguyenchaulinh97@gmail.com
                </div>

                <p className="mt-4 text-base leading-8 text-[#a3b8cc]">
                  I usually reply for product conversations, role discussions,
                  and opportunities that fit frontend engineering with real
                  business context.
                </p>

                <div className="mt-8">
                  {isAndroidWebView ? (
                    <button className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-4 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]">
                      nguyenchaulinh97@gmail.com
                    </button>
                  ) : (
                    <a
                      href="mailto:nguyenchaulinh97@gmail.com"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <button className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-4 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]">
                        Email Me
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
