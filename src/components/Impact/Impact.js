"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "+400%", label: "Bussiness Productivity" },
  { value: "+28%", label: "ROI" },
  { value: "-80%", label: "Leaked Prospects" },
];


import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['800'], // load the 800 weight you need
  display: 'swap',
});

export default function Impact() {
  return (
    <section className="relative z-10 py-14 md:py-14 bg-[#0b0c0f] text-white">
      <div className="text-center space-y-2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="tracking-widest text-[#DCEA22] font-semibold uppercase mb-12 text-xl"
        >
          Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          The Results <span className="text-[#ffff]">Speak for Themselves</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${plusJakarta.className} text-gray-400 max-w-xl mx-auto text-sm sm:text-base`}
        >
          Measurable improvements from actual Exerra.AI clients.
        </motion.p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 * i }}
            className="bg-[#111214] rounded-2xl shadow-xl p-8 text-center"
          >
            <p className="text-4xl sm:text-5xl font-bold text-[#ffff]">{item.value}</p>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}