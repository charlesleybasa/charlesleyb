import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export function TypingText({ words, className = "" }: TypingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[currentWordIndex];

  useEffect(() => {
    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing animation
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 100);
      } else {
        // Wait before untyping
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Untyping animation
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        // Move to next word
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentWord, words.length, currentWordIndex]);

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Glowing background */}
      <motion.span
        className="absolute -inset-1 bg-white rounded-lg blur-sm opacity-40"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Stars */}
      <motion.span
        className="absolute -top-1 -left-1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-3 h-3 text-white" fill="currentColor" />
      </motion.span>
      
      <motion.span
        className="absolute -bottom-1 -right-1"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-4 h-4 text-white" fill="currentColor" />
      </motion.span>
      
      {/* Main text */}
      <span className="relative inline-flex items-baseline">
        <span
          className="font-bold text-white"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)",
          }}
        >
          "{displayText}
        </span>
        {/* Cursor */}
        <motion.span
          className="inline-block w-0.5 h-[0.9em] bg-white ml-0.5 mb-0.5"
          animate={{
            opacity: showCursor ? 1 : 0,
          }}
          transition={{ duration: 0 }}
          style={{
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.9)",
          }}
        />
        <span
          className="font-bold text-white"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.5)",
          }}
        >
          "
        </span>
      </span>
    </span>
  );
}
