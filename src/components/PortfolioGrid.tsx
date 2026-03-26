"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = [
  { id: 1, name: "TANISHA & VIK", src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, name: "SARAH & JOHN", src: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=2699&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, name: "AMARA & LUKE", src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, name: "CHLOE & MAX", src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 px-4 md:px-8 bg-[#FAF9F6]">
      <div className="text-center mb-16">
        <h2 className="text-sm tracking-[0.3em] font-light text-gray-500 uppercase">Featured Stories</h2>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 auto-rows-[400px] gap-2 md:gap-4">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group overflow-hidden cursor-pointer ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-[#FAF9F6] font-serif text-2xl tracking-[0.1em] uppercase">
                {item.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="uppercase text-xs tracking-[0.2em] border border-[#1A1A1A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300">
          View Full Portfolio
        </button>
      </div>
    </section>
  );
}
