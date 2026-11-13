import {
  ArrowRight,
  Activity,
  Droplets,
  Sprout,
  CloudRain,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";


export default function DashboardPreview() {
  const bars = [38, 58, 45, 72, 52, 84, 64, 90, 70, 78, 58, 95];

  return (
    <section className="bg-[#f3f5f0] px-5 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#183a29] md:text-5xl">
            Your farm. Your data.
            <br />
            <span className="text-green-600">Your decisions.</span>
          </h2>
          <p className="mt-5 leading-7 text-gray-500">
            A personalized workspace that keeps your agricultural history, farm
            insights, and recommendations in one place.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-green-950/10"
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#174b32] text-green-300">
                <Sprout size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#183a29]">Orbit Roots</p>
                <p className="text-[10px] text-gray-400">
                  FARMER DASHBOARD PREVIEW
                </p>
              </div>
            </div>
            <span className="rounded-full bg-amber-50 px-3 py-2 text-[10px] font-semibold text-amber-700">
              DEMO DATA
            </span>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr]">
            <aside className="hidden border-r border-gray-100 bg-[#fbfcfa] p-5 lg:block">
              <p className="mb-5 text-[10px] font-bold tracking-widest text-gray-400">
                WORKSPACE
              </p>
              {[
                "Overview",
                "My Farms",
                "Crop History",
                "Recommendations",
                "Weather Insights",
                "Soil Analysis",
              ].map((item, i) => (
                <div
                  key={item}
                  className={`mb-2 flex items-center gap-3 rounded-xl px-3 py-3 text-xs font-medium ${
                    i === 0 ? "bg-green-100 text-green-900" : "text-gray-500"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {item}
                </div>
              ))}
            </aside>

            <div className="min-w-0 p-5 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-[#183a29]">
                    Farm overview
                  </h3>
                  <p className="mt-1 text-xs text-gray-400">
                    Your agricultural activity at a glance
                  </p>
                </div>
                <span className="rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-500">
                  Assiut, Egypt
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    label: "Farm area",
                    value: "5.2",
                    unit: "acres",
                    icon: Layers3,
                  },
                  {
                    label: "Current crop",
                    value: "Wheat",
                    unit: "Winter season",
                    icon: Sprout,
                  },
                  {
                    label: "Soil moisture",
                    value: "42",
                    unit: "% · illustrative",
                    icon: Droplets,
                  },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-gray-100 bg-[#f8faf7] p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <Icon size={17} className="text-green-700" />
                      </div>
                      <p className="mt-4 text-2xl font-bold text-[#183a29]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        {stat.unit}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
                <div className="rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#183a29]">
                        Weather history
                      </p>
                      <p className="mt-1 text-[10px] text-gray-400">
                        Illustrative monthly rainfall trend
                      </p>
                    </div>
                    <CloudRain size={20} className="text-blue-500" />
                  </div>

                  <div className="mt-8 flex h-36 items-end justify-between gap-2">
                    {bars.map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.04 }}
                        className="w-full rounded-t-md bg-linear-to-t from-green-700 to-green-400"
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between text-[9px] text-gray-400">
                    <span>JAN</span>
                    <span>MAR</span>
                    <span>MAY</span>
                    <span>JUL</span>
                    <span>SEP</span>
                    <span>DEC</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm font-semibold text-[#183a29]">
                    Next recommendation
                  </p>
                  <div className="mt-5 flex h-24 items-center justify-center rounded-xl bg-green-50">
                    <Sprout size={45} className="text-green-700" />
                  </div>
                  <p className="mt-4 text-lg font-bold text-[#183a29]">
                    Crop rotation
                  </p>
                  <p className="mt-2 text-xs leading-6 text-gray-500">
                    Review your next planting season using soil and climate
                    conditions.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-green-800">
                    Explore insights <ArrowRight size={13} />
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl bg-green-50 p-4">
                <Activity size={19} className="text-green-700" />
                <p className="text-xs text-green-900">
                  Your crop history and environmental records stay organized in
                  your personal workspace.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
