import { motion } from "motion/react";
import { useState } from "react";
import Vector from "../imports/Vector";

interface GridOverlayProps {
  rows?: number;
  cols?: number;
}

export function GridOverlay({ rows = 8, cols = 12 }: GridOverlayProps) {
  const [hoveredLine, setHoveredLine] = useState<string | null>(null);
  const [stars, setStars] = useState<{ x: number; y: number; id: string }[]>([]);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredIntersection, setHoveredIntersection] = useState<string | null>(null);

  const handleLineHover = (lineId: string) => {
    setHoveredLine(lineId);
  };
  
  const handleLineMouseMove = (e: React.MouseEvent<HTMLDivElement>, lineId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (lineId.startsWith('h-')) {
      // Horizontal line - track X position
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const yMatch = lineId.match(/h-(\d+)/);
      const lineIndex = yMatch ? parseInt(yMatch[1]) : 0;
      const y = (lineIndex / rows) * 100;
      setMousePos({ x, y });
    } else {
      // Vertical line - track Y position
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const xMatch = lineId.match(/v-(\d+)/);
      const lineIndex = xMatch ? parseInt(xMatch[1]) : 0;
      const x = (lineIndex / cols) * 100;
      setMousePos({ x, y });
    }
  };

  const handleIntersectionClick = (x: number, y: number) => {
    const id = `star-${x}-${y}-${Date.now()}`;
    setStars([...stars, { x, y, id }]);
    
    // Remove star after animation
    setTimeout(() => {
      setStars(prev => prev.filter(star => star.id !== id));
    }, 1500);
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Horizontal Lines */}
      {Array.from({ length: rows + 1 }).map((_, i) => {
        const lineId = `h-${i}`;
        const isHovered = hoveredLine === lineId;
        const yPercent = (i / rows) * 100;
        
        return (
          <div
            key={lineId}
            className="absolute left-0 right-0 pointer-events-auto cursor-pointer"
            style={{ top: `${yPercent}%` }}
            onMouseEnter={() => handleLineHover(lineId)}
            onMouseLeave={() => {
              setHoveredLine(null);
              setMousePos(null);
            }}
            onMouseMove={(e) => handleLineMouseMove(e, lineId)}
          >
            {/* The line */}
            <div
              className="relative w-full transition-all duration-300"
              style={{
                height: isHovered ? '3px' : '1px',
                background: isHovered
                  ? "linear-gradient(90deg, transparent, rgba(252, 164, 124, 0.8) 20%, rgba(252, 164, 124, 1) 50%, rgba(252, 164, 124, 0.8) 80%, transparent)"
                  : "rgba(255, 255, 255, 0.1)",
                boxShadow: isHovered ? "0 0 10px rgba(252, 164, 124, 0.8)" : "none",
              }}
            >
              {/* Glitter effect on hover */}
              {isHovered && (
                <>
                  {[...Array(5)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute top-1/2 -translate-y-1/2"
                      initial={{ left: `${Math.random() * 100}%`, opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    >
                      <div className="w-2 h-2 bg-brand-yellow rotate-45" style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                      }} />
                    </motion.div>
                  ))}
                </>
              )}
            </div>
            
            {/* Cursor-following shape on line hover */}
            {isHovered && mousePos && (
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{ 
                  left: `${mousePos.x}%`,
                  top: '50%',
                  width: '60px',
                  height: '20px',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Vector variant="rectangle" orientation="horizontal" />
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Vertical Lines */}
      {Array.from({ length: cols + 1 }).map((_, i) => {
        const lineId = `v-${i}`;
        const isHovered = hoveredLine === lineId;
        const xPercent = (i / cols) * 100;
        
        return (
          <div
            key={lineId}
            className="absolute top-0 bottom-0 pointer-events-auto cursor-pointer"
            style={{ left: `${xPercent}%` }}
            onMouseEnter={() => handleLineHover(lineId)}
            onMouseLeave={() => {
              setHoveredLine(null);
              setMousePos(null);
            }}
            onMouseMove={(e) => handleLineMouseMove(e, lineId)}
          >
            {/* The line */}
            <div
              className="relative h-full transition-all duration-300"
              style={{
                width: isHovered ? '3px' : '1px',
                background: isHovered
                  ? "linear-gradient(180deg, transparent, rgba(252, 164, 124, 0.8) 20%, rgba(252, 164, 124, 1) 50%, rgba(252, 164, 124, 0.8) 80%, transparent)"
                  : "rgba(255, 255, 255, 0.1)",
                boxShadow: isHovered ? "0 0 10px rgba(252, 164, 124, 0.8)" : "none",
              }}
            >
              {/* Glitter effect on hover */}
              {isHovered && (
                <>
                  {[...Array(5)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      className="absolute left-1/2 -translate-x-1/2"
                      initial={{ top: `${Math.random() * 100}%`, opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    >
                      <div className="w-2 h-2 bg-brand-yellow rotate-45" style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                      }} />
                    </motion.div>
                  ))}
                </>
              )}
            </div>
            
            {/* Cursor-following shape on line hover */}
            {isHovered && mousePos && (
              <motion.div
                className="absolute pointer-events-none z-10"
                style={{ 
                  left: '50%',
                  top: `${mousePos.y}%`,
                  width: '20px',
                  height: '40px',
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Vector variant="rectangle" orientation="vertical" />
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Intersection Points - clickable to show stars */}
      {Array.from({ length: rows + 1 }).map((_, i) => 
        Array.from({ length: cols + 1 }).map((_, j) => {
          const xPercent = (j / cols) * 100;
          const yPercent = (i / rows) * 100;
          
          return (
            <div
              key={`intersection-${i}-${j}`}
              className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group"
              style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
              onClick={() => handleIntersectionClick(xPercent, yPercent)}
            >
              {/* Hoverable Vector shape */}
              <motion.div 
                className="absolute inset-0 scale-150"
                whileHover={{ scale: 2.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Vector variant="star" />
              </motion.div>
              
              {/* Subtle dot at intersection */}
              <motion.div
                className="w-1 h-1 bg-white/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 2, backgroundColor: "rgba(252, 164, 124, 0.8)" }}
              />
            </div>
          );
        })
      )}
      
      {/* Animated Stars at intersections */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          initial={{ scale: 0, rotate: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 blur-lg"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0.8, 0],
              }}
              transition={{ duration: 1.5 }}
            >
              <div className="w-8 h-8 bg-brand-yellow rounded-full" />
            </motion.div>
            
            {/* Star shape */}
            <div 
              className="w-8 h-8 bg-gradient-to-br from-brand-yellow to-brand-orange"
              style={{
                clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                filter: "drop-shadow(0 0 6px rgba(252, 164, 124, 0.8))"
              }}
            />
            
            {/* Inner sparkle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 0.5, 0],
              }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}