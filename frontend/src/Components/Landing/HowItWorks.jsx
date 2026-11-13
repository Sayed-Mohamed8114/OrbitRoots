import { ArrowRight, Sprout, Satellite, ScanLine } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Satellite,
      title: "Observe",
      text: "Collect Earth observation, weather, and soil datasets from trusted scientific sources.",
      tags: ["NASA POWER", "MODIS", "SoilGrids"],
    },
    {
      number: "02",
      icon: ScanLine,
      title: "Understand",
      text: "Process climate patterns, soil properties, vegetation indicators, and crop water requirements.",
      tags: ["Soil analysis", "ETo", "ETc"],
    },
    {
      number: "03",
      icon: Sprout,
      title: "Recommend",
      text: "Generate crop suitability assessments and optimized crop rotation recommendations.",
      tags: ["Crop matching", "Rotation", "Scoring"],
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f3f5f0] px-5 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title font-extrabold font-sans text-7xl mb-10 text-green-800">
            How It Works
          </h2>
          <h2 className="text-4xl font-semibold tracking-tight text-[#183a29] md:text-5xl">
            From space data
            <br />
            to <span className="text-green-600">ground decisions.</span>
          </h2>
          <p className="mt-5 leading-7 text-gray-500">
            A scientific workflow that transforms complex environmental data
            into practical agricultural intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative rounded-3xl border border-gray-200/80 bg-white p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#174b32] text-green-300">
                    <Icon size={27} />
                  </div>
                  <span className="text-5xl font-bold text-green-100">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-9 text-2xl font-semibold text-[#183a29]">
                  {step.title}
                </h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-gray-500">
                  {step.text}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {index !== 2 && (
                  <div className="absolute -right-4 top-16 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-green-700 md:flex">
                    <ArrowRight size={15} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
