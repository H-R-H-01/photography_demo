"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=3270&auto=format&fit=crop",
    heading: "TIMELESS.",
    subheading: "RAW. REAL. UNFILTERED.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3270&auto=format&fit=crop",
    heading: "AUTHENTIC.",
    subheading: "EVERY FLEETING MOMENT.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=3270&auto=format&fit=crop",
    heading: "ETERNAL.",
    subheading: "TRENDS FADE, STORY REMAINS.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Wedding Couple"
            fill
            priority={index === 0}
            className="object-cover opacity-60 object-top"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center text-[#FAF9F6] px-4 mt-20">
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
          TytoNyx Presents
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
              {slides[currentSlide].heading}
            </h1>
            <p className="text-sm md:text-lg tracking-widest uppercase font-light">
              {slides[currentSlide].subheading}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? "bg-[#FAF9F6] w-6" : "bg-[#FAF9F6]/40 hover:bg-[#FAF9F6]/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
