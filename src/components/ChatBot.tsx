import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Charles' assistant. Ask me anything about Charles Ley Baldemor - his skills, experience, education, or portfolio!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Contact Information
    if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("number")) {
      return "You can reach Charles at:\n📧 Email: charlesleyb24@gmail.com\n📱 Phone: 09478800962\n📍 Location: #162 San Juan, Agoo, La Union 2504, Philippines";
    }

    // Skills
    if (message.includes("skill") || message.includes("software") || message.includes("tool") || message.includes("technical")) {
      return "Charles has comprehensive technical skills:\n\n🎨 Design & Prototyping:\n• Figma, Adobe XD, Sketch, Photoshop, Illustrator\n\n💻 Programming:\n• Java, C++, VB\n• HTML, CSS, JavaScript, Bootstrap, PHP\n\n🎬 Video Editing:\n• Adobe After Effects, Premiere, Flash\n\n📸 Photography & Videography\n\n🔧 Other Skills:\n• PC Troubleshooting & Maintenance\n• Agile Development (SDLC)\n• Business Analysis (Client Communication, Documentation, Requirements Elicitation)\n• Building Software using AI (Figma Make, Vercel)";
    }

    // Experience
    if (message.includes("experience") || message.includes("work") || message.includes("job") || message.includes("company") || message.includes("employer")) {
      return "Charles has extensive work experience:\n\n💼 Senior UI/UX Designer\nRaemulan Lands Inc. (Joy-Nostalg subsidiary)\nOrtigas Center, Pasig\n\n💼 UI/UX Designer\nYondu Inc. (Globe subsidiary)\nTaguig, Metro Manila\n\n💼 Head of Design & UI/UX Designer\nCCS Solutions Group Philippines Inc.\nQuezon City\n\n💼 UI/UX Designer\nCCS Group Pte Ltd\nToa Payoh, Singapore\n\n💼 Web Developer - Front-end Designer\nQodo Business Solutions\nMelbourne, Australia\n\n💼 On-the-Job Training (Web Developer)\nHDP Software Development Solutions Corp.\nMakati City";
    }

    // Education
    if (message.includes("education") || message.includes("school") || message.includes("university") || message.includes("degree") || message.includes("college")) {
      return "🎓 Educational Background:\n\nCOLLEGE:\nBachelor of Science in Information Technology\nDon Mariano Marcos State University - Mid La Union Campus\nCity of San Fernando, La Union\nGraduated: March 30, 2016\n\nHIGH SCHOOL:\nDon Eufemeo F. Eriguel Memorial National High School\nConsolacion, Agoo, La Union\nGraduated: March 29, 2012\n\nGRADE SCHOOL:\nSan Julian Elementary School\nSan Julian Central, Agoo, La Union\nGraduated: March 8, 2008";
    }

    // Portfolio
    if (message.includes("portfolio") || message.includes("work sample") || message.includes("behance") || message.includes("dribbble") || message.includes("website")) {
      return "Check out Charles' portfolio:\n🌐 Portfolio: https://charlesleyb.wixsite.com/charlesleyb\n🎨 Behance: https://www.behance.net/charlesleyb\n🏀 Dribbble: https://dribbble.com/charlesleyb\n📝 Blog: http://charlesleyb.blogspot.com/";
    }

    // Recognition/Awards
    if (message.includes("award") || message.includes("recognition") || message.includes("achievement") || message.includes("champion") || message.includes("thesis")) {
      return "🏆 Recognition & Achievements:\n\n🥇 Champion - T-shirt Graphic Design Contest\nCollege of Information Technology (DMMMSU-MLUC)\nFebruary 27, 2014\n\n🥉 2nd Runner-up - Graphic Design\n6th La Union Provincial Skills Olympics 2015\nFebruary 27, 2015\n\n🏆 Best Thesis\n\"Interactive Learning System in Mathematics 7 for Saint John the Baptist Learning Center\"\nCollege of Information Technology (DMMMSU-MLUC)\nFebruary 26, 2016";
    }

    // Objective/About
    if (message.includes("objective") || message.includes("goal") || message.includes("about") || message.includes("who")) {
      return "Charles' Objective:\n\"A position that offers both challenges and good opportunities for growth and that will build on my knowledge, skills, and experiences.\"\n\nHe's a passionate UI/UX designer who believes in simplicity, empathy, and purpose, with over 10 years of experience in UI/UX and product design.";
    }

    // Personal Information
    if (message.includes("personal") || message.includes("age") || message.includes("old") || message.includes("born") || message.includes("birthday") || message.includes("height") || message.includes("civil")) {
      return "Personal Information:\n👤 Date of Birth: June 24, 1995\n📍 Place of Birth: City of San Fernando, La Union\n📏 Height: 5'8\"\n⚖️ Weight: 85 kg\n🩸 Blood Type: B\n⛪ Religion: Roman Catholic\n🗣️ Languages: Tagalog, English, Iloco\n💍 Civil Status: Single\n🇵🇭 Citizenship: Filipino";
    }

    // Training/Seminars
    if (message.includes("training") || message.includes("seminar") || message.includes("certification") || message.includes("course") || message.includes("udemy")) {
      return "Seminars & Training Attended:\n\n📚 UXPH (User Experience Philippines)\nGlobe Tower - 2019\n\n📚 Agile Business Analysis\nUdemy - October 1, 2023\n\n📚 Learning Figma - UI/UX Design Essential Training\nUdemy - August 6, 2023\n\n📚 Fundamental of Business Analysis\nUdemy - August 29, 2023\n\n📚 Photography and Post-Processing Seminar\nDMMMSU-MLUC - September 14, 2013\n\n📚 Jsites Programming Camp\nDMMMSU-MLUC - November 29, 2013";
    }

    // Organization
    if (message.includes("organization") || message.includes("member") || message.includes("position") || message.includes("student")) {
      return "Organizations & Positions:\n\n🎓 Student Body Organization (DMMMSU-MLUC)\nPosition: Vice-Governor (2014-2015)\n\n💻 Juniors-Seniors Information Technology Enthusiasts (JSITES)\nDMMMSU-MLUC\nPosition: Member (2015-2016)\n\n🎭 College Of Information Technology Cultural Unit\nDMMMSU-MLUC\nPosition: Auditor (2015-2016)";
    }

    // References
    if (message.includes("reference") || message.includes("recommend")) {
      return "Character References:\n\n👨‍🏫 REYNAN FLORES\nCoach, Polifonico Agoeño\n📱 09187675565\n\n👨‍🏫 DARWIN T. GALLETA\nInstructor, DMMMSU-MLUC\nCity of San Fernando, La Union\n📱 09985509098\n\n👨‍🏫 BERNARDO D. LAMADRID\nInstructor, DMMMSU-MLUC\nCity of San Fernando, La Union\n📱 09991559224";
    }

    // Languages
    if (message.includes("language") || message.includes("speak")) {
      return "Charles speaks:\n🗣️ Tagalog\n🗣️ English\n🗣️ Iloco";
    }

    // Hire/Available
    if (message.includes("hire") || message.includes("available") || message.includes("freelance") || message.includes("collaborate") || message.includes("opportunity")) {
      return "Charles is open to new opportunities! Feel free to reach out at charlesleyb24@gmail.com or use the contact form on this page. Click 'LETS COLLABORATE' to get in touch! 🤝";
    }

    // Hello/Hi
    if (message.includes("hello") || message.includes("hi") || message === "hey") {
      return "Hello! 👋 I'm here to answer your questions about Charles Ley Baldemor. You can ask me about his skills, experience, education, portfolio, awards, organizations, references, or how to contact him!";
    }

    // Thanks
    if (message.includes("thank") || message.includes("thanks")) {
      return "You're welcome! Feel free to ask anything else about Charles! 😊";
    }

    // Default response
    return "I can help you with information about Charles' skills, experience, education, portfolio, awards, training, organizations, references, or contact details. What would you like to know? 🤔";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Get bot response
    const botResponse = getBotResponse(inputValue);
    
    // Add bot message with delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickQuestions = [
    "What are his skills?",
    "Show me his portfolio",
    "Where did he work?",
    "How to contact him?",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-brand-teal hover:bg-brand-teal/90 text-white rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isOpen
            ? "0 0 0 0 rgba(9, 124, 135, 0)"
            : [
                "0 0 0 0 rgba(9, 124, 135, 0.7)",
                "0 0 0 20px rgba(9, 124, 135, 0)",
              ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 md:bottom-28 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-[400px] h-[500px] md:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-teal to-[#0a9aa7] text-white p-4 md:p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-lg md:text-xl">👨‍💻</span>
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Charles' Assistant</h3>
                  <p className="text-xs md:text-sm text-white/90">Ask me anything!</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-2.5 md:py-3 ${
                      message.sender === "user"
                        ? "bg-brand-teal text-white rounded-br-sm"
                        : "bg-white text-gray-800 rounded-bl-sm shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-sm md:text-base whitespace-pre-line break-words">
                      {message.text}
                    </p>
                    <p
                      className={`text-[10px] md:text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-white/70"
                          : "text-gray-400"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Quick Questions */}
              {messages.length === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <p className="text-xs text-gray-500 text-center mb-3">
                    Quick questions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {quickQuestions.map((question, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          // Add user message immediately
                          const userMessage: Message = {
                            id: Date.now().toString(),
                            text: question,
                            sender: "user",
                            timestamp: new Date(),
                          };
                          setMessages((prev) => [...prev, userMessage]);

                          // Get bot response
                          const botResponse = getBotResponse(question);
                          
                          // Add bot message with delay
                          setTimeout(() => {
                            const botMessage: Message = {
                              id: (Date.now() + 1).toString(),
                              text: botResponse,
                              sender: "bot",
                              timestamp: new Date(),
                            };
                            setMessages((prev) => [...prev, botMessage]);
                          }, 500);
                        }}
                        className="text-xs md:text-sm px-3 py-2 bg-white border border-brand-teal text-brand-teal rounded-full hover:bg-brand-teal hover:font-bold transition-all duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 md:p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-3 md:px-4 py-2 md:py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent text-sm md:text-base"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 md:w-11 md:h-11 bg-brand-teal hover:bg-brand-teal/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
