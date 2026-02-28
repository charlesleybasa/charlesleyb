import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted to allow autoplay
  const [showControl, setShowControl] = useState(true);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const hasInteracted = useRef(false);
  const apiLoadedRef = useRef(false);

  useEffect(() => {
    // Check if API is already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
      return;
    }

    // Check if script is already being loaded
    if (apiLoadedRef.current) return;
    apiLoadedRef.current = true;

    // Load YouTube IFrame API only if not already loaded
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          console.log("Error destroying player:", e);
        }
      }
    };
  }, []);

  const initializePlayer = () => {
    if (playerRef.current) return; // Already initialized

    try {
      playerRef.current = new (window as any).YT.Player("background-music-player", {
        height: "1",
        width: "1",
        videoId: "GT_WqPXOIo4",
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: "GT_WqPXOIo4",
          enablejsapi: 1,
          origin: window.location.origin,
          playsinline: 1,
          mute: 1, // Start muted to allow autoplay
        },
        events: {
          onReady: (event: any) => {
            console.log("YouTube player ready");
            setPlayerReady(true);
            event.target.setVolume(50);
            
            // Autoplay muted (browsers allow this)
            try {
              event.target.playVideo();
              setIsPlaying(true);
              console.log("Music autoplay started (muted)");
            } catch (error) {
              console.log("Autoplay error:", error);
              setIsPlaying(false);
            }
          },
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            if (event.data === YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              console.log("Music playing");
            } else if (event.data === YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              console.log("Music paused");
            } else if (event.data === YT.PlayerState.ENDED) {
              // Loop the video
              event.target.playVideo();
            }
          },
          onError: (event: any) => {
            console.log("YouTube player error:", event.data);
          }
        },
      });
    } catch (error) {
      console.log("Error initializing player:", error);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) {
      console.log("Player not ready");
      return;
    }

    hasInteracted.current = true;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
      console.log("Music unmuted");
      
      // Ensure it's playing when unmuting
      if (!isPlaying) {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
      
      // Hide control after 3 seconds
      setTimeout(() => setShowControl(false), 3000);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
      console.log("Music muted");
    }
  };

  return (
    <>
      {/* YouTube Player - hidden but with dimensions */}
      <div className="fixed -left-[9999px] -top-[9999px] pointer-events-none" style={{ width: '1px', height: '1px' }}>
        <div id="background-music-player" />
      </div>

      {/* Music Control Button */}
      <AnimatePresence>
        {showControl && (
          <motion.div
            className="fixed bottom-6 left-6 z-50 flex gap-2"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={toggleMute}
              className="group relative bg-brand-teal hover:bg-brand-teal/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isMuted ? "Unmute music" : "Mute music"}
              title={isMuted ? "Click to unmute background music" : "Click to mute background music"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
              
              {/* Pulse animation when playing and unmuted */}
              {isPlaying && !isMuted && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-brand-teal"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* Indicator for muted autoplay */}
              {isPlaying && isMuted && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full border-2 border-white"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Show control on hover at bottom left */}
      <div
        className="fixed bottom-0 left-0 w-20 h-20 z-40"
        onMouseEnter={() => setShowControl(true)}
      />
    </>
  );
}
