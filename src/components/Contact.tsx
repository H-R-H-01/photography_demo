"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 flex flex-col"
        >
          <h2 className="font-serif text-4xl md:text-5xl uppercase leading-tight text-[#1A1A1A] mb-8">
            Let's Document Your Story
          </h2>
          <p className="text-sm font-light text-gray-500 mb-12">
            I take on a limited number of weddings each year to ensure every couple gets 
            the dedication they deserve. Get in touch below.
          </p>
          
          <div className="space-y-6 text-sm">
            <div>
              <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Email</p>
              <a href="mailto:tytonyxindia@gmail.com" className="hover:opacity-60 transition-opacity">
                tytonyxindia@gmail.com
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Phone</p>
              <a href="tel:+918072078076" className="hover:opacity-60 transition-opacity">
                +91 8072078076
              </a>
            </div>
            <div>
              <p className="uppercase tracking-widest text-xs text-gray-400 mb-1">Location</p>
              <p>Tiruvannamalai, India</p>
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <form className="flex flex-col space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  placeholder="COUPLE NAME" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-[#1A1A1A] outline-none transition-colors text-sm uppercase tracking-wider placeholder:text-gray-400"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  id="email"
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-[#1A1A1A] outline-none transition-colors text-sm uppercase tracking-wider placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input 
                  type="text" 
                  id="phone"
                  placeholder="CONTACT NUMBER" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-[#1A1A1A] outline-none transition-colors text-sm uppercase tracking-wider placeholder:text-gray-400"
                />
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  id="date"
                  placeholder="EVENT DATE" 
                  className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-[#1A1A1A] outline-none transition-colors text-sm uppercase tracking-wider placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="relative">
              <textarea 
                id="message"
                placeholder="SAY MORE ABOUT YOUR WEDDING (VENUE, VIBE, IDEAS)..." 
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-[#1A1A1A] outline-none transition-colors text-sm uppercase tracking-wider placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="self-start uppercase text-xs tracking-[0.2em] border border-[#1A1A1A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Get in Touch
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
