import { useState } from "react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { X, Play } from "lucide-react";

interface VideoPortfolioProps {
  videoIds: string[];
}

export function VideoPortfolio({ videoIds }: VideoPortfolioProps) {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setModalVideo(videoId);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <>
      {/* Simple responsive grid */}
      <div 
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"
        role="list"
        aria-label="Portfolio video gallery"
      >
        {videoIds.map((videoId, index) => (
          <motion.article
            key={videoId}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-gray-900 border-2 border-transparent hover:border-brand-teal"
            onClick={() => handleVideoClick(videoId)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleVideoClick(videoId);
              }
            }}
            aria-label={`Open portfolio project ${index + 1} video in modal`}
          >
            <div className="relative aspect-video">
              {/* YouTube Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`Charles Ley Baldemor UI/UX design portfolio project ${index + 1} - Click to watch video showcase`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  // Fallback to standard quality thumbnail
                  const target = e.currentTarget;
                  if (target.src.includes('maxresdefault')) {
                    target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  } else if (target.src.includes('hqdefault')) {
                    target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                  }
                }}
              />
              
              {/* Play overlay - hidden on mobile, visible on md and up */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center bg-black/20 group-hover:bg-black/50 transition-all duration-300">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-125 group-hover:shadow-2xl transition-all duration-300">
                  <Play className="w-10 h-10 text-brand-teal ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Portfolio Links Section */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 md:mt-16 text-center"
        aria-label="Additional portfolio links"
      >
        <p className="text-brand-teal mb-4" style={{ fontSize: "clamp(18px, 2vw, 24px)" }}>
          To view more portfolio, please visit the following links:
        </p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 flex-wrap max-w-4xl mx-auto" 
          role="list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.a
            href="https://charlesleyb.wixsite.com/charlesleyb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 hover:from-brand-teal hover:to-brand-teal/90 rounded-full overflow-hidden transition-all duration-500 border border-brand-teal/20 hover:border-brand-teal backdrop-blur-sm"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="relative z-10 text-brand-teal group-hover:text-white transition-colors duration-300 flex items-center gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v18H3V3zm2 2v14h14V5H5z"/>
              </svg>
              charlesleyb.wixsite.com
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            href="https://www.behance.net/charlesleyb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 hover:from-brand-teal hover:to-brand-teal/90 rounded-full overflow-hidden transition-all duration-500 border border-brand-teal/20 hover:border-brand-teal backdrop-blur-sm"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="relative z-10 text-brand-teal group-hover:text-white transition-colors duration-300 flex items-center gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v10h7c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1zm-6 9V8h6v8h-6zM2 7h7v10H2c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1zm6 9V8H2v8h6z"/>
              </svg>
              behance.net/charlesleyb
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            href="https://dribbble.com/charlesleyb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 hover:from-brand-teal hover:to-brand-teal/90 rounded-full overflow-hidden transition-all duration-500 border border-brand-teal/20 hover:border-brand-teal backdrop-blur-sm"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="relative z-10 text-brand-teal group-hover:text-white transition-colors duration-300 flex items-center gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
              </svg>
              dribbble.com/charlesleyb
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.a>

          <motion.a
            href="http://charlesleyb.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-3 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 hover:from-brand-teal hover:to-brand-teal/90 rounded-full overflow-hidden transition-all duration-500 border border-brand-teal/20 hover:border-brand-teal backdrop-blur-sm"
            style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span 
              className="relative z-10 text-brand-teal group-hover:text-white transition-colors duration-300 flex items-center gap-2"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
              </svg>
              charlesleyb.blogspot.com
            </motion.span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 via-brand-orange/20 to-brand-orange/0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.a>
        </motion.div>
      </motion.nav>

      {/* Modal for full video playback */}
      <Dialog open={!!modalVideo} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-0">
          <DialogTitle className="sr-only">Portfolio Video</DialogTitle>
          <DialogDescription className="sr-only">
            Watch portfolio video showcase
          </DialogDescription>
          <button
            onClick={closeModal}
            className="absolute -top-12 right-0 z-50 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          {modalVideo && (
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                title="Charles Ley Baldemor Portfolio Project Video - UI/UX Design Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
