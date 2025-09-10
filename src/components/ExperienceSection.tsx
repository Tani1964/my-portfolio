import React from 'react';
import { motion } from 'motion/react';

export function ExperienceSection() {
  const experiences = [
    {
      title: "President",
      company: "SWYI (Strategic Women and Youth Institute) Ambassadors",
      period: "Oct 2024 - Present",
      description: [
        "Led community tech initiatives and coordinated project-based learning for youth empowerment",
        "Led a GEDSI project for Sirius X Energy as a consultant, reaching over 1,500 women and youths across Nigeria's six geopolitical zones"
      ],
      tech: ["Leadership", "Project Management", "Community Outreach", "GEDSI"]
    },
    {
      title: "Software Engineer",
      company: "Runit Technologies",
      period: "July 2022 - Present",
      description: [
        "Designed and developed mobile and web applications for multiple organizations including African Caribbean Investment Summit, NBBCI",
        "Built solutions for projects like RunAm, LetsLink and startups including Carsle, Bos Kona, Gatekeepers, Polymarq",
        "Managed cross-functional teams, coordinated with product stakeholders, and ensured product-market fit through iterative design"
      ],
      tech: ["AWS", "GCP", "Docker", "Kubernetes", "Django", "Node.js", "React.js", "Next.js", "TypeScript"]
    }
  ];

  const volunteering = [
    {
      title: "Assistant Software Director",
      organization: "NACS UNILAG (National Association of Computing Students)",
      description: "Organized events, training, and partnerships for computer science students"
    },
    {
      title: "Team Lead MLSA",
      organization: "Microsoft Student Learn Ambassadors UNILAG",
      description: "Mentored and organized bootcamps and monthly webinars for over 800 students"
    },
    {
      title: "Web Dev Tutor",
      organization: "Selfless Hearts",
      description: "Mentored students in full-stack development and system design with scalable microservice strategies"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
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
            <h2 className="text-3xl font-bold text-white">Professional Journey</h2>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>
        </motion.div>

        {/* Main Experience */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-black border border-green-500/30 rounded-lg p-8 hover:border-green-500/60 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className="text-green-400 text-lg">{exp.company}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500 rounded-full px-4 py-2 mt-4 md:mt-0">
                    <span className="text-green-400 font-mono text-sm">{exp.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                      className="bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteering Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Community Involvement</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {volunteering.map((vol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black border border-green-500/30 rounded-lg p-6 hover:border-green-500/60 transition-colors"
              >
                <h4 className="text-lg font-bold text-green-400 mb-2">{vol.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{vol.organization}</p>
                <p className="text-gray-300 text-sm">{vol.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}