"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=3270&auto=format&fit=crop"
          alt="Wedding Couple"
          fill
          priority
          className="object-cover opacity-60 object-top"
        />
      </div>

      <div className="relative z-10 text-center text-[#FAF9F6] px-4 mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
        >
          TytoNyx Presents
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6"
        >
          TIMELESS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm md:text-lg tracking-widest uppercase font-light"
        >
          RAW. REAL. UNFILTERED.
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-widest text-[#FAF9F6] mb-2 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-[#FAF9F6]/50 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-[#FAF9F6] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
