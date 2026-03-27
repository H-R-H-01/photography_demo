"use client";

import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#1A1A1A] pt-24"
    >
      <Testimonials />
    </motion.div>
  );
}
