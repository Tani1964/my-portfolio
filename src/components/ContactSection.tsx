import { motion } from "framer-motion";
import React, { useState } from 'react';
;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contacts = [
    {
      title: "Email",
      value: "tanitoluwa.ifegbesan@gmail.com",
      icon: "📧",
      link: "mailto:tanitoluwa.ifegbesan@gmail.com"
    },
    {
      title: "Phone",
      value: "07052256260",
      icon: "📱",
      link: "tel:07052256260"
    },
    {
      title: "LinkedIn",
      value: "Connect with me",
      icon: "💼",
      link: "#"
    },
    {
      title: "GitHub",
      value: "github.com/Tani1964",
      icon: "💻",
      link: "https://github.com/Tani1964"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
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
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <div className="w-12 h-0.5 bg-green-500"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's build something amazing together. 
            I'm always excited to discuss new opportunities and innovative ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you're looking to build a new application, optimize existing systems, 
                or discuss emerging technologies, I'm here to help bring your vision to life.
              </p>
            </div>

            <div className="grid gap-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-black border border-green-500/30 rounded-lg p-4 hover:border-green-500/60 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <div className="text-green-400 font-medium">{contact.title}</div>
                      <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Terminal-style info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black border border-green-500 rounded-lg p-4 font-mono text-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">availability.sh</span>
              </div>
              
              <div className="text-green-400 space-y-1">
                <div><span className="text-gray-500">$</span> ./check_availability.sh</div>
                <div className="text-green-300">Status: Available for new projects</div>
                <div className="text-green-300">Response time: Within 24 hours</div>
                <div className="text-green-300">Timezone: WAT (UTC+1)</div>
                <div className="text-yellow-300">Preferred contact: Email</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-green-500/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-green-400 mb-2 font-mono">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-green-400 mb-2 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-green-400 mb-2 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900 border border-green-500/30 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-6 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Or reach out directly at{' '}
                <a
                  href="mailto:tanitoluwa.ifegbesan@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  tanitoluwa.ifegbesan@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}