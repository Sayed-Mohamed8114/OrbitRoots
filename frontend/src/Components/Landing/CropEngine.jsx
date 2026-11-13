import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function CropEngine() {
  const features = [
    "Climate suitability analysis",
    "Soil health assessment",
    "Crop water requirement estimation",
    "Crop rotation optimization",
    "Heat resilience evaluation",
    "Agricultural calendar planning",
  ];

  const crops = [
    {
      name: "Wheat",
      type: "Winter crop",
      water: "Medium",
      image: "/crop1.jpeg",
    },
    {
      name: "Fava Beans",
      type: "Winter crop",
      water: "Low",
      image: "/crop2.jpeg",
    },
    {
      name: "Sorghum",
      type: "Summer crop",
      water: "Low",
      image: "crop3.webp",
    },
    {
      name: "Sunflower",
      type: "Summer crop",
      water: "Medium",
      image: "/crop4.jpeg",
    },
  ];

  return (
    <section id="product" className="bg-white px-5 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="section-title font-extrabold font-sans text-3xl mb-10 text-black">
              Intelligent crop engine
            </h2>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#183a29] md:text-5xl">
              Intelligence beneath
              <span className="text-green-600"> every recommendation.</span>
            </h2>
            <p className="mt-6 leading-8 text-gray-500">
              Our recommendation engine evaluates environmental conditions
              alongside agricultural science to help identify suitable crops and
              smarter rotation strategies for the Assiut region.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Check size={13} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/signup"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#174b32] px-6 py-4 text-sm font-semibold text-white transition hover:bg-green-800"
            >
              Explore recommendations <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#183a29]">
                  Candidate crop library
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Selected crops for Upper Egypt
                </p>
              </div>
              <span className="rounded-full bg-green-50 px-3 py-2 text-xs font-semibold text-green-800">
                9 crops
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {crops.map((crop, index) => (
                <motion.div
                  key={crop.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-[#f8faf7] transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={crop.image}
                      alt={crop.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-green-800 backdrop-blur">
                      {crop.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#183a29]">
                      {crop.name}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Water demand: {crop.water}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-5 text-gray-400">
              Preview of selected crops. The full candidate library includes
              wheat, corn, clover, fava beans, sorghum, sunflower, cotton,
              onion, and okra. Water labels are illustrative, not calculated
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
