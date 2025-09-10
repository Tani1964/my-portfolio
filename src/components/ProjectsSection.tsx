import { motion } from "framer-motion";
import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
;

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: "Compiler X-ray",
      description: "Modeled an intuitive graphical interface illustrating complex compiler transformations",
      tech: ["Flask", "Python", "React", "TailwindCSS", "D3.js", "TypeScript"],
      features: [
        "Visualizes compiler transformation steps",
        "Interactive graphical interface",
        "Real-time code analysis",
        "Educational tool for compiler design"
      ],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "https://github.com/Tani1964",
      status: "Completed"
    },
    {
      title: "Banking App API",
      description: "Created a robust banking application REST API with secure transaction handling",
      tech: [".NET", "C#", "MVC", "SQL Server", "Entity Framework"],
      features: [
        "Secure user authentication",
        "Transaction processing",
        "Account management",
        "MVC design architecture"
      ],
      category: "Backend API",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "https://github.com/Tani1964",
      status: "Completed"
    },
    {
      title: "Search Engine",
      description: "Implemented advanced search functionality with autocomplete and query optimization",
      tech: ["TypeScript", "Vite", "TailwindCSS", "Singleton Pattern"],
      features: [
        "Autocomplete functionality",
        "Query representation optimization",
        "Singleton design pattern implementation",
        "Modern frontend interface"
      ],
      category: "Full-Stack",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "https://github.com/Tani1964",
      status: "Completed"
    },
    {
      title: "Obstacle Avoidance Robot",
      description: "Engineered an autonomous four-wheel drive robot with intelligent navigation",
      tech: ["Arduino Uno", "Ultrasonic Sensors", "C++", "Hardware Design"],
      features: [
        "Autonomous navigation",
        "Real-time obstacle detection",
        "Four-wheel drive system",
        "Sensor-based decision making"
      ],
      category: "Hardware/IoT",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "https://github.com/Tani1964",
      status: "Completed"
    },
    {
      title: "Ping Pong Game",
      description: "Implemented a retro-style ping pong game using Assembly language",
      tech: ["Assembly", "MASM", "Low-level Programming"],
      features: [
        "Retro game aesthetics",
        "Assembly language implementation",
        "Real-time graphics rendering",
        "Classic arcade gameplay"
      ],
      category: "Game Development",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      demoLink: "#",
      githubLink: "https://github.com/Tani1964",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-0.5 bg-green-500"></div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of innovative projects showcasing diverse technical skills 
            and problem-solving approaches across different domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 ${
                  selectedProject === index
                    ? 'border-green-500 bg-green-500/10'
                    : 'border-green-500/30 bg-gray-900 hover:border-green-500/60'
                }`}
                onClick={() => setSelectedProject(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
                
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-green-500/30"
                  >
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs text-green-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-800 border border-gray-600 text-gray-300 px-3 py-1 rounded hover:bg-gray-700 transition-colors flex items-center space-x-1"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.demoLink}
                        className="text-xs bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded hover:bg-green-500/30 transition-colors flex items-center space-x-1"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Demo</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <ImageWithFallback
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {projects[selectedProject].category}
                  </span>
                  <div className="flex space-x-2">
                    <a
                      href={projects[selectedProject].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={projects[selectedProject].demoLink}
                      className="bg-green-500/50 hover:bg-green-500/70 p-2 rounded-full transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {projects[selectedProject].description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Key Features</h4>
                <div className="space-y-2">
                  {projects[selectedProject].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-bold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-2 rounded-lg text-sm font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}