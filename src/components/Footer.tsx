// src/components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-semibold text-lg">Tanitoluwa Samuel Ifegbesan</h2>
          <p className="text-sm mt-1">Software Engineer • Building Scalable & Impactful Products</p>
        </div>

        {/* Center: Links */}
        <nav className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-xs text-gray-600 mt-8">
        © {new Date().getFullYear()} Tanitoluwa Samuel Ifegbesan. All rights reserved.
      </div>
    </footer>
  );
}
