import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";

interface TrackSelectionProps {
  onTrackSelect: (track: "technical" | "non-technical" | "fun") => void;
}

export function TrackSelection({ onTrackSelect }: TrackSelectionProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  const yearsSince = (start: string) => {
    const diff = Date.now() - new Date(start).getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const tracks = [
    {
      id: "technical",
      title: "Technical",
      subtitle: "Development & Systems",
      description:
        "Explore coding expertise, system design, and modern software practices.",
      features: [
        "Code Samples",
        "System Architecture",
        "Technical Documentation",
        "Development Workflow",
      ],
      accentColor: "text-blue-500",
    },
    {
      id: "non-technical",
      title: "Professional",
      subtitle: "Leadership & Growth",
      description:
        "Discover my professional journey: leadership, teamwork, and achievements beyond coding.",
      features: [
        "Project Portfolio",
        "Leadership Experience",
        "Client Testimonials",
        "Career Highlights",
      ],
      accentColor: "text-white",
    },
    {
      id: "fun",
      title: "Interactive",
      subtitle: "Play & Experiment",
      description:
        "Enjoy creative projects, mini games, and experiments that reflect curiosity and problem-solving.",
      features: [
        "Interactive Demos",
        "Mini Games",
        "Creative Projects",
        "Playful Features",
      ],
      accentColor: "text-purple-500",
    },
  ];

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <div className="text-center px-4">
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide"
                initial={{ y: -150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
              >
                Tanitoluwa Samuel Ifegbesan
              </motion.h1>
              <motion.p
                className="text-gray-300 mt-2 text-xl md:text-2xl lg:text-3xl font-light"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                Software Engineer
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="h-screen bg-black text-white flex flex-col">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: showSplash ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex items-center justify-center overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-6 lg:gap-8 px-4 lg:px-6">
            {/* Left side: Picture */}
            <div className="relative bg-gradient-to-tr from-gray-900/60 to-gray-800/40 backdrop-blur-md p-2 rounded-2xl border border-gray-700 shadow-lg">
              <img
                src="/img/prof.png"
                alt="Tanitoluwa Samuel Ifegbesan"
                className="w-full h-auto max-h-[35vh] lg:max-h-[40vh] object-cover rounded-xl"
              />
            </div>

            {/* Right side: Content */}
            <div className="text-center md:text-left">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-6 lg:mb-8"
              >
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 leading-tight">
                  Building Scalable Software & Impactful Digital Products
                </h1>
                <p className="text-gray-400 text-sm lg:text-base font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                  {yearsSince("2020-01-01")} years programming •{" "}
                  {yearsSince("2022-01-01")} years professional work. Blending
                  technical expertise with leadership and creativity.
                </p>
              </motion.div>

              {/* Track Cards */}
              <div className="grid sm:grid-cols-2 gap-2 lg:gap-4">
                {tracks.map((track, index) => (
                  <motion.div
                    key={track.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    onHoverStart={() => setHoveredTrack(track.id)}
                    onHoverEnd={() => setHoveredTrack(null)}
                    className="group border border-gray-600 rounded-none"
                  >
                    <motion.div
                      className="bg-black border-2 border-gray-700 p-4 lg:p-5 cursor-pointer h-full text-left transition-colors"
                      whileHover={{
                        scale: 1.02,
                        borderColor: "#ffffff",
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        onTrackSelect(
                          track.id as "technical" | "non-technical" | "fun"
                        )
                      }
                    >
                      <h3 className="text-base lg:text-lg font-medium">
                        {track.title}
                      </h3>
                      <p className={`${track.accentColor} text-xs mb-2`}>
                        {track.subtitle}
                      </p>
                      <p className="text-gray-300 text-xs lg:text-sm mb-3 leading-relaxed">
                        {track.description}
                      </p>
                      <ul className="space-y-1">
                        {track.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-400 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-gray-600" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.main>

        {/* Footer */}
        <div className="flex-shrink-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
