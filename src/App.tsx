import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import Footer from "./components/Footer";
import { GamesSection } from "./components/GamesSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SideNavigation } from "./components/SideNavigation";
import { SkillsSection } from "./components/SkillsSection";
import { TechnicalQuiz } from "./components/TechnicalQuiz";
import { Terminal } from "./components/Terminal";
import { ThemeProvider } from "./components/ThemeProvider";
import { TrackSelection } from "./components/TrackSelection";

type Track = "technical" | "non-technical" | "fun" | null;
type AppState = "track-selection" | "quiz" | "main-app" | "games";

// Simplified Side Navigation for Non-Technical Track
const SimpleSideNavigation = ({ theme, onBackToSelection }) => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`fixed left-0 top-0 h-full w-16 z-50 transition-colors duration-500 ${
        theme === "warm"
          ? "bg-black/90 backdrop-blur-sm border-r border-pink-200"
          : "bg-black/90 backdrop-blur-sm border-r border-green-500/30"
      }`}
    >
      <div className="flex flex-col items-center py-6 space-y-6">
        {/* Back to Selection Button */}
        <motion.button
          onClick={onBackToSelection}
          className={`p-3 rounded-lg transition-colors ${
            theme === "warm"
              ? "text-pink-600 hover:bg-pink-100"
              : "text-green-400 hover:bg-green-500/20"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Back to Track Selection"
        >
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
        </motion.button>

       

        {/* External Link Indicator */}
        <div className={`h-px w-8 ${theme === "warm" ? "bg-pink-200" : "bg-green-500/30"}`} />
        
        <motion.div
          className={`text-xs font-mono writing-mode-vertical ${
            theme === "warm" ? "text-pink-400" : "text-green-400/60"
          }`}
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Professional
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default function App() {
  const [appState, setAppState] = useState<AppState>("track-selection");
  const [selectedTrack, setSelectedTrack] = useState<Track>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [showQuiz, setShowQuiz] = useState(false);

  // Handle track selection
  const handleTrackSelection = (track: Track) => {
    setSelectedTrack(track);

    if (track === "technical") {
      setShowQuiz(true);
      setAppState("quiz");
    } else if (track === "fun") {
      setAppState("games");
    } else {
      setAppState("main-app");
    }
  };

  // Handle quiz completion or skip
  const handleQuizComplete = () => {
    setShowQuiz(false);
    setAppState("main-app");
  };

  // Navigation handler for side nav and terminal
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track active section for navigation (only for technical track)
  useEffect(() => {
    if (appState !== "main-app" || selectedTrack !== "technical") return;

    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [appState, selectedTrack]);

  // Track Selection Screen
  if (appState === "track-selection") {
    return (
      <ThemeProvider theme="technical">
        <TrackSelection onTrackSelect={handleTrackSelection} />
      </ThemeProvider>
    );
  }

  // Technical Quiz Screen
  if (appState === "quiz") {
    return (
      <ThemeProvider theme="technical">
        <TechnicalQuiz
          onComplete={handleQuizComplete}
          onSkip={handleQuizComplete}
        />
      </ThemeProvider>
    );
  }

  // Games Section for Fun Track
  if (appState === "games") {
    return (
      <ThemeProvider theme="fun">
        <div className="min-h-screen bg-black">
          <GamesSection
            onBackToSelection={() => setAppState("track-selection")}
          />
        </div>
      </ThemeProvider>
    );
  }

  // Main Portfolio Application
  const themeType = selectedTrack === "non-technical" ? "warm" : "technical";

  return (
    <ThemeProvider theme={themeType}>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          selectedTrack === "non-technical"
            ? "bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
            : "bg-black text-white"
        }`}
      >
        {/* Side Navigation */}
        {selectedTrack === "non-technical" ? (
          <SimpleSideNavigation
            theme="warm"
            onBackToSelection={() => setAppState("track-selection")}
          />
        ) : (
          <SideNavigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
            theme="technical"
            onBackToSelection={() => setAppState("track-selection")}
          />
        )}

        {/* Main Content */}
        {selectedTrack === "non-technical" ? (
          // Embedded External Portfolio for Non-Technical Track
          <main 
            className="fixed top-0 transition-all duration-300"
            style={{ 
              left: '4rem', // 16 * 0.25rem = 4rem for sidebar
              width: 'calc(100vw - 4rem)', 
              height: '100vh' 
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key="non-technical-embedded"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ width: '100%', height: '100%' }}
              >
                <motion.div
                  className="relative rounded-l-xl overflow-hidden shadow-2xl"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  {/* Loading indicator */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center z-10"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="inline-block w-8 h-8 border-4 border-pink-300 border-t-pink-600 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <p className="mt-4 text-pink-600 font-medium">Loading Portfolio...</p>
                    </div>
                  </motion.div>
                  
                  {/* Embedded iframe */}
                  <iframe
                    src="https://tanisamuel.netlify.app/"
                    className="border-0"
                    title="Tanitoluwa Samuel Portfolio"
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-links allow-popups allow-popups-to-escape-sandbox"
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      minWidth: '100%',
                      minHeight: '100vh'
                    }}
                  />
                  
                  {/* Overlay for external link indication */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.a
                      href="https://tanisamuel.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg text-pink-600 hover:bg-white transition-all duration-300 text-sm font-medium"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15,3 21,3 21,9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Open in New Tab
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </main>
        ) : (
          // Original Technical Track Content
          <main className="ml-16 transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTrack}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div id="hero">
                  <HeroSection theme="technical" />
                </div>

                <div id="about">
                  <AboutSection theme="technical" />
                </div>

                <div id="skills">
                  <SkillsSection theme="technical" />
                </div>

                <div id="experience">
                  <ExperienceSection theme="technical" />
                </div>

                <div id="projects">
                  <ProjectsSection theme="technical" />
                </div>

                <div id="contact">
                  <ContactSection theme="technical" />
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        )}

        {/* Footer - Only for Technical Track */}
        {selectedTrack === "technical" && (
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ml-16 py-8 border-t bg-black border-green-500/30"
          >
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm font-mono mb-4 md:mb-0 text-gray-400">
                  © 2024 Tanitoluwa Samuel Ifegbesan. Built with React & TypeScript.
                </div>

                <div className="flex items-center space-x-6">
                  <motion.a
                    href="https://github.com/Tani1964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="mailto:tanitoluwa.ifegbesan@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </motion.a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-green-500/30 text-center">
                <p className="text-sm font-mono text-green-400">
                  {`> System status: Online | Last updated: ${new Date().toLocaleDateString()}`}
                </p>
              </div>
            </div>
          </motion.footer>
        )}

        {/* Terminal Component - Only for Technical Track */}
        {selectedTrack === "technical" && (
          <Terminal onNavigate={handleNavigate} />
        )}

        {/* Background Effects - Only for Technical Track */}
        {selectedTrack === "technical" && (
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-500/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -150, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </ThemeProvider>
  );
}