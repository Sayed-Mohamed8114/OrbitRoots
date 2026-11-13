import { ArrowDown, ArrowRight, Activity, Droplets } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const reveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-212.5 items-center overflow-hidden bg-[#f3f5f0] px-5 pb-20 pt-36 md:px-10"
    >
      <div className="absolute -left-48 top-20 h-125 w-125 rounded-full bg-green-200/30 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.05fr]">
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-2xl text-5xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#183a29] sm:text-6xl lg:text-[76px]"
          >
            Grow smarter.
            <br />
            <span className="text-green-600">Harvest better.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-8 text-gray-600 md:text-lg"
          >
            Turn satellite observations, soil intelligence, and climate data
            into smarter agricultural decisions. Know what to plant, when to
            plant it, and how to make every drop of water count.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="/signup"
              className="group flex items-center gap-3 rounded-xl bg-[#174b32] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-1 hover:bg-green-800"
            >
              Start your journey
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700 transition hover:border-green-700 hover:text-green-800"
            >
              Explore the platform
              <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-7 border-t border-gray-200 pt-7"
          >
            <div>
              <p className="text-2xl font-bold text-[#183a29]">09</p>
              <p className="mt-1 text-xs text-gray-500">Candidate crops</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-[#183a29]">365</p>
              <p className="mt-1 text-xs text-gray-500">Days of insights</p>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-bold text-[#183a29]">NASA</p>
              <p className="mt-1 text-xs text-gray-500">
                Earth observation data
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-120 overflow-hidden rounded-4xl shadow-2xl shadow-green-950/15 md:h-124.5">
            <img
              src="/hero.jpeg"
              alt="Aerial view of agricultural fields"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#102c20]/70 via-transparent to-[#102c20]/10" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-green-200">
                Intelligence from above
              </p>
              <p className="mt-2 text-3xl font-semibold">
                See the bigger picture.
              </p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-6 top-24 hidden w-52 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500">
                Vegetation index
              </span>
              <Activity size={17} className="text-green-600" />
            </div>
            <p className="mt-2 text-3xl font-bold text-[#174b32]">0.78</p>
            <p className="mt-1 text-xs text-green-700">
              Illustrative NDVI value
            </p>
            <div className="mt-3 h-1.5 rounded-full bg-gray-100">
              <div className="h-full w-[78%] rounded-full bg-green-500" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="absolute -right-5 bottom-24 hidden w-48 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl sm:block"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Droplets size={16} className="text-blue-500" />
              Water insights
            </div>
            <p className="mt-2 text-2xl font-bold text-[#174b32]">Smart</p>
            <p className="mt-1 text-xs text-gray-500">Crop water assessment</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
