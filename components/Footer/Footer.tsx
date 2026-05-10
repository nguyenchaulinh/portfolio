import ScribbleDivider from "../Home/ArtDirection/ScribbleDivider";
import FacebookIcon from "../Icons/FacebookIcon";
import GithubIcon from "../Icons/GithubIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const iconsData = [
  {
    href: "https://github.com/nguyenchaulinh97",
    Icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/nguyenchaulinh/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/smthabtcl/",
    Icon: InstagramIcon,
    label: "Instagram",
  },
  { href: "https://fb.com/smthabtcl", Icon: FacebookIcon, label: "Facebook" },
];

export default function Footer(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
  onOpenStickerHunt?: () => void;
}) {
  return (
    <footer className="bg-AAprimary px-4 pb-10 pt-2 sm:px-16 lg:px-24 2xl:px-72">
      <div className="mx-auto max-w-[1200px]">
        <ScribbleDivider label="end credits" className="mx-auto max-w-4xl" />

        <div className="comic-panel mt-6 overflow-hidden rounded-[20px] p-6 sm:rounded-[32px] sm:p-10 xl:p-12">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex rounded border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                thanks for visiting
              </div>

              <h3 className="mt-6 max-w-xl font-Header text-3xl leading-tight text-[#fcfcfd] sm:text-4xl">
                Designed as a living portfolio, not a frozen template.
              </h3>

              <p className="mt-5 max-w-2xl font-Text2 text-base leading-8 text-[#a3b8cc]">
                This site keeps evolving with my work, products, and visual
                direction. The current version leans into a sophisticated,
                structural style while staying useful for recruiters and
                collaborators.
              </p>

              {props.onOpenStickerHunt ? (
                <button
                  type="button"
                  onClick={props.onOpenStickerHunt}
                  className="mt-6 inline-flex rounded bg-white/[0.06] border border-white/[0.1] px-5 py-2.5 font-Header text-xs font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]"
                >
                  play mini game
                </button>
              ) : null}
            </div>

            <div className="comic-panel rounded-[18px] p-6 sm:rounded-[26px] sm:p-8">
              <div className="font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
                Built by Nguyen Chau Linh
              </div>
              <p className="mt-4 font-Text2 text-base leading-8 text-[#a3b8cc]">
                Curious about how this portfolio is put together? The source is
                public and updated alongside the site.
              </p>

              <a
                href={props.githubUrl}
                target={"_blank"}
                rel="noreferrer"
                className="mt-6 inline-flex"
              >
                <span className="rounded bg-white/[0.06] border border-white/[0.1] px-6 py-3 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]">
                  View Source
                </span>
              </a>

              <div
                className={`mt-8 flex gap-3 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}
              >
                {iconsData.map((iconData) => (
                  <div key={iconData.href}>
                    <a
                      href={iconData.href}
                      target={"_blank"}
                      rel="noreferrer"
                      aria-label={iconData.label}
                      className="group flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.02] text-[#a3b8cc] transition duration-300 hover:bg-white/[0.06] hover:text-[#fcfcfd]"
                    >
                      <iconData.Icon className="h-5 w-5 fill-current transition duration-300" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
