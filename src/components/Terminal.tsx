import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface Command {
  input: string;
  output: string[];
  timestamp: string;
}

interface TerminalProps {
  onNavigate: (section: string) => void;
}

export function Terminal({ onNavigate }: TerminalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([]);
  const [commandHistory, setCommandHistory] = useState<
    string[]
  >([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: [
      "Available commands:",
      "  help       - Show this help message",
      "  about      - Navigate to about section",
      "  experience - Navigate to experience section",
      "  skills     - Navigate to skills section",
      "  projects   - Navigate to projects section",
      "  contact    - Navigate to contact section",
      "  chat       - Start AI chat mode",
      "  clear      - Clear terminal",
      "  whoami     - Display user info",
      "  ls         - List available sections",
      "  pwd        - Show current location",
      "  neofetch   - Display system info",
      "  github     - Open GitHub profile",
      "  linkedin   - Open LinkedIn profile",
    ],
    about: ["Navigating to about section..."],
    experience: ["Navigating to experience section..."],
    skills: ["Navigating to skills section..."],
    projects: ["Navigating to projects section..."],
    contact: ["Navigating to contact section..."],
    whoami: [
      "tanitoluwa@portfolio:~$ whoami",
      "Tanitoluwa Samuel Ifegbesan",
      "Software Engineer | Computer Science Graduate",
      "University of Lagos | Full-Stack Developer",
      "Current Role: Software Engineer at Runit Technologies",
      "Specialization: AWS, Docker, Kubernetes, React, Node.js",
    ],
    ls: [
      "Available sections:",
      "drwxr-xr-x  about/",
      "drwxr-xr-x  experience/",
      "drwxr-xr-x  skills/",
      "drwxr-xr-x  projects/",
      "drwxr-xr-x  contact/",
      "-rw-r--r--  resume.pdf",
      "-rw-r--r--  portfolio.json",
    ],
    pwd: ["/home/tanitoluwa/portfolio"],
    clear: [],
    neofetch: [
      "                   -`                 tanitoluwa@portfolio",
      "                  .o+`                -------------------------",
      "                 `ooo/                OS: Portfolio Linux x86_64",
      "                `+oooo:               Host: Personal Website",
      "               `+oooooo:               Kernel: React.js-18.2.0",
      "               -+oooooo+:              Uptime: Always Online",
      "             `/:-:++oooo+:             Packages: TypeScript, TailwindCSS",
      "            `/++++/+++++++:            Shell: Terminal.tsx",
      "           `/++++++++++++++:           Resolution: Responsive",
      "          `/+++ooooooooooooo/          WM: Motion (Framer Motion)",
      "         ./ooosssso++osssssso+`        Theme: Matrix Green [dark]",
      "        .oossssso-````/ossssss+`       Icons: Lucide React",
      "       -osssssso.      :ssssssso.      Terminal: Custom Built",
      "      :osssssss/        osssso+++.     CPU: JavaScript V8 Engine",
      "     /ossssssss/        +ssssooo/-     Memory: Optimized for Performance",
      "   `/ossssso+/:-        -:/+osssso+-   ",
      "  `+sso+:-`                 `.-/+oso:  ",
      " `++:.                           `-/+/ ",
      " .`                                 `/ ",
    ],
    chat: [
      "AI Chat Mode Activated 🤖",
      "Hello! I'm Tanitoluwa's AI assistant.",
      "Ask me anything about his experience, skills, or projects!",
      "",
      "Try asking:",
      '• "What technologies does Tanitoluwa use?"',
      '• "Tell me about his experience"',
      '• "What projects has he worked on?"',
      '• "How can I contact him?"',
      "",
      'Type "exit" to return to terminal mode.',
    ],
    github: [
      "Opening GitHub profile...",
      "🔗 https://github.com/Tani1964",
    ],
    linkedin: [
      "LinkedIn profile would open here...",
      "🔗 Connect with Tanitoluwa on LinkedIn",
    ],
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date().toLocaleTimeString();

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd === "github") {
      window.open("https://github.com/Tani1964", "_blank");
    }

    const output = commands[
      trimmedCmd as keyof typeof commands
    ] || [
      `Command not found: ${trimmedCmd}`,
      'Type "help" for available commands',
    ];

    const newCommand: Command = {
      input: cmd,
      output,
      timestamp,
    };

    setHistory((prev) => [...prev, newCommand]);

    // Handle navigation
    if (
      [
        "about",
        "experience",
        "skills",
        "projects",
        "contact",
      ].includes(trimmedCmd)
    ) {
      setTimeout(() => {
        onNavigate(trimmedCmd);
        setIsOpen(false);
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(
          commandHistory[commandHistory.length - 1 - newIndex],
        );
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(
          commandHistory[commandHistory.length - 1 - newIndex],
        );
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-black p-4 rounded-full shadow-lg transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="4,17 10,11 4,5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </motion.button>

      {/* Terminal Window - Made Much Larger */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 right-6 w-[800px] h-[600px] max-w-[90vw] max-h-[80vh] bg-black border border-green-500 rounded-lg shadow-2xl z-40 font-mono text-sm"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-gray-900 border-b border-green-500 p-3 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 font-bold">
              tanitoluwa@portfolio:~
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors text-lg"
            >
              ×
            </button>
          </div>

          {/* Terminal Content */}
          <div className="h-full p-4 overflow-y-auto text-green-400 bg-black rounded-b-lg">
            <div className="mb-3 text-green-500">
              <div className="text-lg font-bold">
                🚀 Welcome to Tanitoluwa's Portfolio Terminal
                v2.0
              </div>
              <div className="text-sm text-gray-400 mt-1">
                Enhanced Interactive Command Interface
              </div>
            </div>
            <div className="mb-4 text-gray-400">
              Type 'help' for available commands | Use ↑↓ for
              command history
            </div>

            {/* Command History */}
            <div className="space-y-3">
              {history.map((cmd, idx) => (
                <div key={idx} className="mb-4">
                  <div className="text-green-500 mb-1">
                    <span className="text-green-400">
                      tanitoluwa@portfolio:~$
                    </span>
                    <span className="ml-2">{cmd.input}</span>
                    <span className="text-gray-500 text-xs ml-4">
                      [{cmd.timestamp}]
                    </span>
                  </div>
                  <div className="ml-4 space-y-1">
                    {cmd.output.map((line, lineIdx) => (
                      <div
                        key={lineIdx}
                        className="text-gray-300"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center mt-4 sticky bottom-0 bg-black pt-2 border-t border-green-500/30"
            >
              <span className="text-green-400 mr-3 font-bold">
                tanitoluwa@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-green-400 caret-green-400 text-base"
                autoComplete="off"
                placeholder="Enter command..."
              />
            </form>

            {/* Quick Commands */}
            <div className="mt-4 pt-3 border-t border-green-500/30">
              <div className="text-gray-500 text-xs mb-2">
                Quick Commands:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "help",
                  "about",
                  "skills",
                  "projects",
                  "contact",
                  "neofetch",
                ].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-1 rounded hover:bg-green-500/20 transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}