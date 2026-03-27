"use client";

import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#FAF9F6] pt-16"
    >
      <Contact />
    </motion.div>
  );
}
