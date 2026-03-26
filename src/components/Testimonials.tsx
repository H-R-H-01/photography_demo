"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "PhoNyx truly captured the essence of our wedding. Every picture tells a story, and looking back at them feels like reliving the day all over again.",
    name: "Tanisha & Vik"
  },
  {
    quote: "The way they played with light and shadows was magical. Not just photographers, but true artists who made us feel so comfortable.",
    name: "Sarah & John"
  },
  {
    quote: "Authentic, raw, and absolutely stunning. We couldn't have asked for a better team to trust our memories with.",
    name: "Amara & Luke"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-[#1A1A1A] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-serif text-3xl md:text-5xl tracking-wide uppercase mb-20 max-w-3xl leading-snug"
        >
          Kind Words From My Amazing Clients
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center space-y-8"
            >
              <p className="font-light text-sm md:text-base leading-relaxed opacity-80 min-h-[120px]">
                "{testimonial.quote}"
              </p>
              <div className="w-12 h-[1px] bg-[#FAF9F6]/30"></div>
              <span className="font-serif text-xl tracking-widest uppercase">
                {testimonial.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
