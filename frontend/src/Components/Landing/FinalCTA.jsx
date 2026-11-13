import { ArrowUpRight, Sprout } from "lucide-react";
export default function FinalCTA() {
  return (
    <section className="bg-gray-100 px-5 pb-5 ">
      <div className="relative  overflow-hidden rounded-4xl bg-[#174b32] px-7 py-20 text-center md:px-16">
        <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full border border-green-300/10" />
        <div className="absolute -left-24 -bottom-40 h-96 w-96 rounded-full border border-green-300/10" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-[100px]" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-green-300/20 bg-green-400/10 text-green-300">
            <Sprout size={29} />
          </div>
          <p className="mt-7 text-xs font-bold tracking-[0.2em] text-green-300">
            THE FUTURE OF FARMING
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Your next harvest starts with better decisions.
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-7 text-green-100/65">
            Bring satellite intelligence and agricultural science closer to your
            farm. Make every season a smarter one.
          </p>
          <a
            href="/signup"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-green-400 px-8 py-4 text-sm font-bold text-[#102c20] transition hover:-translate-y-1 hover:bg-green-300"
          >
            Get started with Orbit Roots
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
