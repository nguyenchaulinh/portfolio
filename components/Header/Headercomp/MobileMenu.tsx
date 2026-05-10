import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: "aboutSection", label: "About", number: "01", offset: -70 },
  {
    id: "WhereIhaveWorkedSection",
    label: "Experience",
    number: "02",
    offset: -220,
  },
  { id: "ProductsSection", label: "Products", number: "03", offset: -70 },
  { id: "ArcadeSection", label: "Arcade", number: "🕹️", offset: -70 },
  {
    id: "SomethingIveBuiltSection",
    label: "Case Studies",
    number: "04",
    offset: -70,
  },
  { id: "GetInTouchSection", label: "Contact", number: "05", offset: -70 },
];

type MobileMenuProps = {
  rotate: boolean;
  setRotate: Dispatch<SetStateAction<boolean>>;
  setShowElement: Dispatch<SetStateAction<boolean>>;
  showElement: boolean;
};

export default function MobileMenu({
  rotate,
  setRotate,
  setShowElement,
  showElement,
}: MobileMenuProps) {
  const closeMenu = () => {
    setRotate(!rotate);
    setShowElement(!showElement);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={rotate ? { x: "0" } : { x: "100%" }}
      transition={{ x: { duration: 0.35 } }}
      className="fixed inset-0 z-20 flex lg:hidden"
    >
      <div
        onClick={() => closeMenu()}
        className="h-full flex-1 bg-[#10192f]/[0.55] backdrop-blur-sm"
      />

      <div className="relative h-full w-[82%] max-w-sm overflow-hidden border-l border-white/[0.06] bg-[#0a0f1c]/95 px-6 pb-10 pt-24">
        <div className="absolute left-4 top-4 rounded border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#a3b8cc]">
          menu
        </div>

        <div className="relative flex h-full flex-col">
          <div className="mb-8">
            <div className="font-Header text-3xl text-white">Navigate</div>
            <p className="mt-2 font-Text2 text-sm leading-6 text-[#a3b8cc]">
              Jump straight to the sections recruiters usually care about first.
            </p>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={220}
                onClick={() => closeMenu()}
                className="group flex cursor-pointer items-center gap-4 rounded-[16px] border border-white/[0.06] bg-white/[0.02] px-4 py-4 hover:bg-white/[0.06]"
              >
                <span className="rounded border border-[#e5c185]/30 bg-[#e5c185]/10 px-3 py-1.5 font-Mono text-[10px] uppercase tracking-widest text-[#e5c185]">
                  {item.number}
                </span>
                <div>
                  <div className="font-Header text-lg text-white">
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <a
            href={"/resume.pdf"}
            target={"_blank"}
            rel="noreferrer"
            className="mt-8"
          >
            <button className="w-full rounded bg-white/[0.06] border border-white/[0.1] px-6 py-4 font-Header text-sm font-semibold uppercase tracking-wider text-[#fcfcfd] transition duration-200 hover:bg-white/[0.1]">
              Open Resume
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
