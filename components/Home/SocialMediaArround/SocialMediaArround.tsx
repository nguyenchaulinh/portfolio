import { motion } from "framer-motion";
import FacebookIcon from "../../Icons/FacebookIcon";
import GithubIcon from "../../Icons/GithubIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";

const socialLinks = [
  {
    href: "https://github.com/nguyenchaulinh97",
    Icon: GithubIcon,
    label: "GitHub",
    rotate: "rotate-[-4deg]",
  },
  {
    href: "https://www.linkedin.com/in/nguyenchaulinh/",
    Icon: LinkedinIcon,
    label: "LinkedIn",
    rotate: "rotate-[3deg]",
  },
  {
    href: "https://www.instagram.com/smthabtcl/",
    Icon: InstagramIcon,
    label: "Instagram",
    rotate: "rotate-[-2deg]",
  },
  {
    href: "https://fb.com/smthabtcl",
    Icon: FacebookIcon,
    label: "Facebook",
    rotate: "rotate-[2deg]",
  },
];

export default function SocialMediaArround() {
  return (
    <>
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.18 }}
        className="fixed bottom-8 left-5 z-20 hidden lg:flex xl:left-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
            find me
          </div>

          <div className="relative flex flex-col items-center gap-3 rounded-[24px] border border-white/[0.08] bg-white/[0.02] px-3 py-4">
            {socialLinks.map((link) => (
              <div key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-14 w-14 items-center justify-center rounded-[16px] border border-white/[0.06] bg-white/[0.02] text-[#a3b8cc] transition duration-300 hover:bg-white/[0.06] hover:text-[#fcfcfd]"
                  aria-label={link.label}
                >
                  <link.Icon className="h-6 w-6 fill-current transition duration-300" />
                </a>
              </div>
            ))}
          </div>

          <div className="dotted-connector h-24 w-[4px]" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.22 }}
        className="fixed bottom-8 right-5 z-20 hidden lg:flex xl:right-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
            say hi
          </div>

          <a
            href="mailto:nguyenchaulinh97@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col items-center rounded-[24px] border border-white/[0.08] bg-white/[0.02] px-3 py-5 transition duration-300 hover:bg-white/[0.06]"
          >
            <div
              className="font-Mono text-[11px] tracking-[0.22em] text-[#a3b8cc] group-hover:text-[#fcfcfd] transition duration-300"
              style={{ writingMode: "vertical-rl" }}
            >
              nguyenchaulinh97@gmail.com
            </div>
          </a>

          <div className="dotted-connector h-24 w-[4px]" />
        </div>
      </motion.div>
    </>
  );
}
