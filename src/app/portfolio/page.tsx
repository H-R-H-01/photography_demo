"use client";

import { motion } from "framer-motion";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32 min-h-screen bg-[#FAF9F6]"
    >
      <div className="text-center mb-8 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl tracking-tight text-[#1A1A1A]"
        >
          Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-sm tracking-widest uppercase text-gray-500 max-w-2xl mx-auto"
        >
          A collection of fleeting moments documented with truth and elegance.
        </motion.p>
      </div>

      <PortfolioGrid />
    </motion.div>
  );
}
