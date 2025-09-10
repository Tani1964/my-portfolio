import { motion } from "framer-motion";
import React from 'react';
;

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C#"],
      color: "green"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Django", "FastAPI", "NodeJS", ".NET"],
      color: "blue"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"],
      color: "purple"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "GraphQL", "Prisma", "SQLAlchemy", "Umami"],
      color: "yellow"
    },
    {
      title: "Technical Skills",
      skills: ["Data Structures", "Algorithms", "Microservices", "TDD", "RAG", "System Design"],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "border-green-500 text-green-400",
      blue: "border-blue-500 text-blue-400",
      purple: "border-purple-500 text-purple-400",
      yellow: "border-yellow-500 text-yellow-400",
      red: "border-red-500 text-red-400"
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <section id="skills" className="py-20 bg-black">
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
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable, 
            high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gray-900 border border-green-500/30 rounded-lg p-6 hover:border-green-500/60 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className={`border rounded-lg p-3 text-center font-mono text-sm hover:scale-105 transition-transform ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-900 border border-green-500 rounded-lg p-6 font-mono text-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-xs">skills.py</span>
          </div>
          
          <div className="text-green-400 space-y-1">
            <div><span className="text-blue-400">class</span> <span className="text-yellow-400">TechStack</span>:</div>
            <div className="ml-4"><span className="text-blue-400">def</span> <span className="text-yellow-400">__init__</span>(self):</div>
            <div className="ml-8">self.frontend = [<span className="text-green-300">"React"</span>, <span className="text-green-300">"Next.js"</span>, <span className="text-green-300">"TypeScript"</span>]</div>
            <div className="ml-8">self.backend = [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"Django"</span>, <span className="text-green-300">"FastAPI"</span>, <span className="text-green-300">"Node.js"</span>]</div>
            <div className="ml-8">self.cloud = [<span className="text-green-300">"AWS"</span>, <span className="text-green-300">"GCP"</span>, <span className="text-green-300">"Azure"</span>, <span className="text-green-300">"Docker"</span>]</div>
            <div className="ml-8">self.databases = [<span className="text-green-300">"PostgreSQL"</span>, <span className="text-green-300">"MongoDB"</span>]</div>
            <div className="mt-4"><span className="text-gray-500"># Continuously learning and evolving...</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}