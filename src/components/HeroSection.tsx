import { motion } from "framer-motion";
import React, { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
;

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated grid background
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.1)';
      ctx.lineWidth = 1;

      const gridSize = 50;
      const time = Date.now() * 0.001;

      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const opacity = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 + time) * 0.5 + 0.5;
          ctx.globalAlpha = opacity * 0.3;
          ctx.strokeRect(x, y, gridSize, gridSize);
        }
      }

      // Animated circles
      ctx.globalAlpha = 1;
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        const radius = 100 + Math.sin(time + i) * 50;
        const x = canvas.width / 2 + Math.cos(time + i * 1.5) * 200;
        const y = canvas.height / 2 + Math.sin(time + i * 1.5) * 200;
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const codeLines = [
    "class SoftwareEngineer {",
    "  constructor() {",
    "    this.name = 'Tanitoluwa Samuel Ifegbesan';",
    "    this.role = 'Full-Stack Developer';",
    "    this.skills = ['Python', 'JavaScript', 'TypeScript', 'C#'];",
    "    this.experience = 'AWS | Docker | Kubernetes | React';",
    "  }",
    "}"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Code and Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Typing Effect */}
          <div className="bg-gray-900 border border-green-500 rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs">portfolio.js</span>
            </div>
            
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                className="text-green-400"
              >
                <span className="text-gray-500 mr-2">{index + 1}</span>
                {line}
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
              className="mt-4 text-green-500"
            >
              <span className="text-gray-500 mr-2">&gt;</span>
              <span className="animate-pulse">█</span>
            </motion.div>
          </div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Tanitoluwa
              <span className="text-green-500 block">Samuel Ifegbesan</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Software Engineer crafting scalable solutions with modern technologies. 
              Passionate about microservices, cloud architecture, and innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="grid grid-cols-3 gap-6"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">5+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Profile Image with Robotic Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            {/* Animated Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-green-500 rounded-full"
                style={{
                  width: `${300 + i * 40}px`,
                  height: `${300 + i * 40}px`,
                  left: `${-20 - i * 20}px`,
                  top: `${-20 - i * 20}px`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                }}
              />
            ))}
            
            {/* Profile Image */}
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-green-500 bg-gray-900">
              <ImageWithFallback
                src="../../public/img/small.jpeg"
                alt="Tanitoluwa Samuel Ifegbesan"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-green-500 rotate-45"
              animate={{ rotate: [45, 405] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-green-500 text-center"
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l3 3 7-7"/>
            <path d="M12 19V5"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}