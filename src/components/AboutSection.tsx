import React from 'react';
import { motion } from 'motion/react';

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-0.5 bg-green-500"></div>
              <h2 className="text-3xl font-bold text-white">About Me</h2>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Software Engineer with a Bachelor's degree in Computer Science 
                from the University of Lagos. My journey in technology has been driven by a 
                relentless pursuit of innovation and excellence in creating scalable solutions.
              </p>
              
              <p>
                Currently serving as President of SWYI (Strategic Women and Youth Institute) 
                Ambassadors, where I lead community tech initiatives and coordinate project-based 
                learning for youth empowerment. I've successfully led a GEDSI project reaching 
                over 1,500 women and youths across Nigeria's six geopolitical zones.
              </p>
              
              <p>
                With over 2 years of experience at Runit Technologies, I specialize in designing 
                and developing mobile and web applications using cutting-edge technologies like 
                AWS, Google Cloud, Docker, Kubernetes, and modern JavaScript frameworks.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-6"
            >
              <div className="bg-black border border-green-500/30 rounded-lg p-4">
                <div className="text-green-500 font-mono text-lg">07052256260</div>
                <div className="text-gray-400 text-sm">Phone</div>
              </div>
              <div className="bg-black border border-green-500/30 rounded-lg p-4">
                <div className="text-green-500 font-mono text-lg">Lagos, Nigeria</div>
                <div className="text-gray-400 text-sm">Location</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-black border border-green-500 rounded-lg p-6 font-mono">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">education.json</span>
              </div>
              
              <div className="text-green-400 text-sm space-y-2">
                <div className="text-green-500">{`{`}</div>
                <div className="ml-4">
                  <span className="text-blue-400">"institution"</span>: 
                  <span className="text-yellow-400"> "University of Lagos"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">"degree"</span>: 
                  <span className="text-yellow-400"> "Bachelor of Science"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">"major"</span>: 
                  <span className="text-yellow-400"> "Computer Science"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">"location"</span>: 
                  <span className="text-yellow-400"> "Lagos, Nigeria"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-blue-400">"relevantCourses"</span>: [
                </div>
                <div className="ml-8 text-yellow-400">
                  "Data Structures and Algorithms",<br/>
                  "Automata Theory",<br/>
                  "Operating Systems",<br/>
                  "System Design",<br/>
                  "Networking",<br/>
                  "Calculus"
                </div>
                <div className="ml-4">]</div>
                <div className="text-green-500">{`}`}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://github.com/Tani1964"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-green-500/30 rounded-lg p-4 text-center hover:border-green-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-green-500 font-mono">GitHub</div>
                <div className="text-gray-400 text-sm">View Code</div>
              </motion.a>
              
              <motion.a
                href="mailto:tanitoluwa.ifegbesan@gmail.com"
                className="bg-black border border-green-500/30 rounded-lg p-4 text-center hover:border-green-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-green-500 font-mono">Email</div>
                <div className="text-gray-400 text-sm">Get in Touch</div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}