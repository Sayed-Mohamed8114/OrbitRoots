import {
  Satellite,
  Sun,
  Globe2,
  ShieldCheck,
  Layers3,
  Waves,
} from "lucide-react";
import { motion } from "framer-motion";


export default function Technology() {
  const sources = [
    {
      name: "NASA POWER",
      description:
        "Climate and meteorological observations for agricultural analysis.",
      icon: Sun,
      category: "CLIMATE DATA",
    },
    {
      name: "MODIS",
      description:
        "Satellite-derived vegetation and evapotranspiration observations.",
      icon: Globe2,
      category: "EARTH OBSERVATION",
    },
    {
      name: "SoilGrids",
      description:
        "Global soil information, including texture and chemical properties.",
      icon: Layers3,
      category: "SOIL INTELLIGENCE",
    },
  ];

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-green-950 px-5 py-28 text-white md:px-10"
    >
      <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full border border-green-400/10" />
      <div className="absolute -right-20 -top-20 h-85 w-85 rounded-full border border-green-400/10" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-gray-100 font-serif font-semibold ">Earth observation technology</h2>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Powered by
              <br />
              <span className="text-green-400">Earth intelligence.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-green-100/60">
              Orbit Roots brings together trusted Earth observation and
              environmental datasets to build a deeper understanding of
              agricultural conditions.
            </p>

            <div className="mt-9 flex items-center gap-3 text-sm text-green-200/70">
              <ShieldCheck size={19} className="text-green-400" />
              Science-based data sources and transparent estimates
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-green-400/10 blur-3xl" />
            <div className="relative mx-auto flex aspect-square max-w-97.5 items-center justify-center">
              <motion.div
                className="absolute inset-4 rounded-full border border-green-400/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-12 rounded-full border border-dashed border-green-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-green-400/30 bg-linear-to-br from-green-500/20 to-transparent shadow-[0_0_90px_rgba(74,222,128,0.15)]">
                <Globe2
                  size={100}
                  strokeWidth={0.8}
                  className="text-green-300"
                />
              </div>
              <motion.div
                className="absolute right-10 top-14 flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/30 bg-[#1a4430] text-green-300"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Satellite size={23} />
              </motion.div>
              <motion.div
                className="absolute bottom-14 left-8 flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/30 bg-[#1a4430] text-green-300"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Waves size={23} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {sources.map((source) => {
            const Icon = source.icon;
            return (
              <div
                key={source.name}
                className="rounded-2xl border border-white/10 bg-white/4 p-7 transition hover:border-green-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Icon size={24} />
                </div>
                <p className="mt-7 text-[10px] font-bold tracking-[0.2em] text-green-400">
                  {source.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{source.name}</h3>
                <p className="mt-3 text-sm leading-7 text-green-100/50">
                  {source.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-7 text-xs leading-6 text-green-100/40">
          Satellite observations, gridded datasets, and derived model estimates
          have different spatial and temporal resolutions. Their limitations are
          considered during analysis.
        </p>
      </div>
    </section>
  );
}
