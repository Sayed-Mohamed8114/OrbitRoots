
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sprout } from "lucide-react";

const LOADER_KEY = "orbit_roots_loader_seen";

export default function Loader({ onComplete }) {
  const [showLoader, setShowLoader] = useState(
    () => !localStorage.getItem(LOADER_KEY)
  );

  // Lock scrolling while loader is visible
  useEffect(() => {
    if (!showLoader) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [showLoader]);

  // Complete loader after 1.9 seconds
  useEffect(() => {
    if (!showLoader) return;

    const timer = setTimeout(() => {
      localStorage.setItem(LOADER_KEY, "true");
      setShowLoader(false);
      onComplete?.();
    }, 1900);

    return () => clearTimeout(timer);
  }, [showLoader, onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-9999 flex h-screen min-h-screen flex-col items-center justify-center overflow-hidden bg-[#102c20]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65 } }}
        >
          <div className="relative flex h-40 w-40 items-center justify-center">

            <motion.div
              className="absolute inset-0 rounded-full border border-green-400/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute inset-3 rounded-full border border-dashed border-green-400/40"
              animate={{ rotate: -360 }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute -right-1 top-7 h-3 w-3 rounded-full bg-green-400 shadow-[0_0_18px_#4ade80]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-full bg-green-400/10"
              animate={{ scale: [0.85, 1.1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sprout
                size={44}
                className="text-green-400"
                strokeWidth={1.3}
              />
            </motion.div>
          </div>

          <motion.h1
            className="mt-7 text-2xl font-semibold tracking-[0.25em] text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ORBIT ROOTS
          </motion.h1>

          <p className="mt-3 text-xs tracking-[0.2em] text-green-200/60">
            CONNECTING EARTH INTELLIGENCE
          </p>

          <div className="mt-8 h-0.5 w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-green-400"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
