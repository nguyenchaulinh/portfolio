import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.25 }}
      className="relative h-14 w-14 flex-none"
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-[12px] border border-white/[0.12] bg-white/[0.04]" />

        <div className="absolute inset-0 flex items-center justify-center rounded-[12px]">
          <span className="font-Header text-xl font-medium tracking-wide text-white">
            CL
          </span>
        </div>
      </div>
    </motion.div>
  );
}
