import { useState } from "react";
import { ArrowUpRight, Sprout, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Product", "#product"],
    ["How it works", "#how-it-works"],
    ["Technology", "#technology"],
    ["About", "#about"],
  ];
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/60 bg-white/85 px-5 py-3 shadow-sm backdrop-blur-xl md:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#174b32] text-green-300">
            <Sprout size={23} />
          </div>
          <span className="text-lg font-bold tracking-tight text-[#173c29]">
            orbit<span className="text-green-600">roots.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm font-medium text-gray-600 transition hover:text-green-700"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="/signin"
            className="text-sm font-semibold text-[#173c29] hover:text-green-700"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="flex items-center gap-2 rounded-xl bg-[#174b32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Get started <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#174b32] md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-4 mt-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl md:hidden"
          >
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-gray-100 py-3 text-sm font-medium text-gray-700"
              >
                {name}
              </a>
            ))}
            <a
              href="/signin"
              className="mt-4 block text-sm font-semibold text-green-800"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="mt-3 block rounded-xl bg-[#174b32] p-3 text-center text-sm font-semibold text-white"
            >
              Get started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
