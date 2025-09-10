import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
;

interface Welcome3DProps {
  onComplete: () => void;
}

export function Welcome3D({ onComplete }: Welcome3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePos({
          x: (e.clientX - centerX) / (rect.width / 2),
          y: (e.clientY - centerY) / (rect.height / 2)
        });
      }
    };

    const handleClick = () => {
      setIsInteracting(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Auto progress after 3 seconds
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(onComplete, 1000);
    }, 3000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      clearTimeout(timer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (isInteracting) {
      setProgress(100);
      setTimeout(onComplete, 1000);
    }
  }, [isInteracting, onComplete]);

  const cubeStyle = {
    transform: `perspective(1000px) rotateX(${mousePos.y * 20}deg) rotateY(${mousePos.x * 20}deg) rotateZ(${isInteracting ? 360 : 0}deg)`,
    transition: isInteracting ? 'transform 1s ease-out' : 'transform 0.1s ease-out'
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsInteracting(true)}
    >
      <div className="relative">
        {/* 3D Cube Container */}
        <div 
          className="relative w-64 h-64 mx-auto"
          style={cubeStyle}
        >
          {/* Cube faces */}
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-500 to-green-700 border-2 border-green-400 opacity-80"
               style={{ transform: 'translateZ(132px)' }}>
            <div className="p-8 text-center text-black font-mono">
              <div className="text-2xl font-bold mb-2">FRONT</div>
              <div className="text-sm">Welcome to</div>
              <div className="text-lg font-bold">Portfolio</div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-600 to-green-800 border-2 border-green-400 opacity-80"
               style={{ transform: 'rotateY(90deg) translateZ(132px)' }}>
            <div className="p-8 text-center text-white font-mono">
              <div className="text-2xl font-bold mb-2">RIGHT</div>
              <div className="text-sm">Interactive</div>
              <div className="text-lg font-bold">Experience</div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-700 to-green-900 border-2 border-green-400 opacity-80"
               style={{ transform: 'rotateY(180deg) translateZ(132px)' }}>
            <div className="p-8 text-center text-white font-mono">
              <div className="text-2xl font-bold mb-2">BACK</div>
              <div className="text-sm">Software</div>
              <div className="text-lg font-bold">Engineer</div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-800 to-green-900 border-2 border-green-400 opacity-80"
               style={{ transform: 'rotateY(-90deg) translateZ(132px)' }}>
            <div className="p-8 text-center text-white font-mono">
              <div className="text-2xl font-bold mb-2">LEFT</div>
              <div className="text-sm">Full Stack</div>
              <div className="text-lg font-bold">Developer</div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-500 to-green-700 border-2 border-green-400 opacity-80"
               style={{ transform: 'rotateX(90deg) translateZ(132px)' }}>
            <div className="p-8 text-center text-black font-mono">
              <div className="text-2xl font-bold mb-2">TOP</div>
              <div className="text-sm">Tanitoluwa</div>
              <div className="text-lg font-bold">Samuel</div>
            </div>
          </div>
          
          <div className="absolute inset-0 w-64 h-64 bg-gradient-to-br from-green-800 to-green-900 border-2 border-green-400 opacity-80"
               style={{ transform: 'rotateX(-90deg) translateZ(132px)' }}>
            <div className="p-8 text-center text-white font-mono">
              <div className="text-2xl font-bold mb-2">BOTTOM</div>
              <div className="text-sm">Click to</div>
              <div className="text-lg font-bold">Enter</div>
            </div>
          </div>
        </div>

        {/* Interaction hints */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-green-400 font-mono text-lg mb-2">
            Move mouse to rotate • Click to enter
          </div>
          <div className="text-green-500 text-sm">
            Interactive 3D Portfolio Experience
          </div>
        </motion.div>

        {/* Progress ring */}
        <motion.div
          className="absolute -inset-8 border-4 border-transparent border-t-green-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, ease: "linear" }}
        />

        {/* Floating particles around cube */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              left: `${50 + 40 * Math.cos((i * 30) * Math.PI / 180)}%`,
              top: `${50 + 40 * Math.sin((i * 30) * Math.PI / 180)}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      {/* Skip button */}
      <motion.button
        className="absolute top-8 right-8 text-green-400 hover:text-green-300 font-mono text-sm border border-green-500/30 px-4 py-2 rounded-lg hover:border-green-500/60 transition-colors"
        onClick={() => setIsInteracting(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Skip intro &gt;
      </motion.button>
    </motion.div>
  );
}