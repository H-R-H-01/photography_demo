"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative h-[600px] md:h-[800px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1549417229-aa67d3263f33?q=80&w=2070&auto=format&fit=crop"
            alt="About PhoNyx"
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Text Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-start"
        >
          <span className="text-xs tracking-[0.2em] font-light mb-4 text-gray-500 uppercase">A Little About Me</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#1A1A1A] mb-8 leading-tight">
            I capture the unspoken.
          </h2>
          
          <div className="space-y-6 text-[#1A1A1A]/80 font-light text-sm md:text-base leading-relaxed max-w-lg">
            <p>
              Trends fade, but the story behind a photograph remains. At PhoNyx, we believe in authentic moments—the nervous laugh, the silent tear, the chaotic beauty of your wedding day.
            </p>
            <p>
              Based in Tiruvannamalai, India, we document love stories globally, turning real emotions into timeless art that you will cherish for generations.
            </p>
            <p className="font-serif italic text-xl text-[#1A1A1A] pt-4">
              "Every love story is art. You just need the right light to see it."
            </p>
          </div>

          <button className="mt-12 uppercase text-xs tracking-[0.2em] border-b border-[#1A1A1A] pb-1 hover:opacity-60 transition-opacity">
            Meet the team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
