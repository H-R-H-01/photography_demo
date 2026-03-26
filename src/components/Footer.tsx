import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-3xl font-serif tracking-widest text-[#1A1A1A] mb-2">PhoNyx</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500">By TytoNyx</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8 text-xs tracking-widest uppercase text-[#1A1A1A]/70">
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
          <Link href="#portfolio" className="hover:text-[#1A1A1A] transition-colors">Portfolio</Link>
          <Link href="#contact" className="hover:text-[#1A1A1A] transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex space-x-6 text-[#1A1A1A]">
          <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 flex flex-col items-center md:flex-row justify-between text-[10px] text-gray-400 tracking-widest uppercase gap-4">
        <span>&copy; {new Date().getFullYear()} PhoNyx Photography. All Rights Reserved.</span>
        <span>Based in Tiruvannamalai, India</span>
      </div>
    </footer>
  );
}
