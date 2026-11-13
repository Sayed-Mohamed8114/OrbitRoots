import { Droplets, Thermometer, BarChart3, Layers3 } from "lucide-react";
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



export default function Problem() {
  const problems = [
    {
      icon: Droplets,
      title: "Water uncertainty",
      text: "Limited water resources demand smarter irrigation planning and better understanding of crop water requirements.",
    },
    {
      icon: Thermometer,
      title: "Climate challenges",
      text: "Changing temperatures and unpredictable weather make agricultural planning more difficult.",
    },
    {
      icon: Layers3,
      title: "Soil degradation",
      text: "Without soil intelligence, farmers risk exhausting the natural resources their crops depend on.",
    },
    {
      icon: BarChart3,
      title: "Guesswork in planning",
      text: "Crop selection without combining climate, soil, and agricultural history can lead to poor decisions.",
    },
  ];

  return (
    <section id="about" className="bg-white px-5 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-[#183a29] md:text-5xl">
              Agriculture deserves
              <br />
              <span className="text-green-600">better data.</span>
            </h2>
            <p className="max-w-md leading-7 text-gray-500">
              Every field has a story. But without the right information,
              understanding that story becomes a challenge.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  variants={fadeUp}
                  key={item.title}
                  className="group rounded-2xl border border-gray-100 bg-[#f8faf7] p-7 transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800 transition group-hover:bg-[#174b32] group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <span className="mt-7 block text-xs font-bold text-green-700">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-[#183a29]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
