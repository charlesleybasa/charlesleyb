import { motion } from "motion/react";

interface MobileMockupProps {
  videoUrl: string;
}

export function MobileMockup({ videoUrl }: MobileMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Mobile Device Frame */}
      <div className="relative">
        {/* Device Shadow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-orange/20 blur-3xl transform scale-95" />
        
        {/* Device Frame */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
          {/* Screen */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
            
            {/* Video Content */}
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            
            {/* Screen Overlay for subtle reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
        </div>

        {/* Floating Elements for Visual Interest */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-8 -right-8 w-24 h-24 bg-brand-orange/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-teal/20 rounded-full blur-2xl"
        />
      </div>
    </motion.div>
  );
}
