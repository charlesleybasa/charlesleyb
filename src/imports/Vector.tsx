import svgPaths from "./svg-f86ef6fznr";
import { motion } from "motion/react";

export default function Vector({ variant = "star", orientation = "horizontal" }: { variant?: "star" | "rectangle"; orientation?: "horizontal" | "vertical" }) {
  return (
    <div className="relative size-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" data-name="Vector">
      {variant === "star" ? (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
          <motion.path 
            d={svgPaths.p19c9ac80} 
            fill="var(--fill-0, #D31D69)" 
            id="Vector"
          />
        </svg>
      ) : (
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={orientation === "horizontal" ? "0 0 100 30" : "0 0 30 100"}>
            <rect 
              width={orientation === "horizontal" ? "100" : "30"} 
              height={orientation === "horizontal" ? "30" : "100"} 
              rx="15" 
              ry="15" 
              fill="#D31D69"
              opacity="0.9"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}