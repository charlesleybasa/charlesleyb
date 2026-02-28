import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealText } from "./RevealText";
import imgRectangle8 from "figma:asset/fc92f8cf568f27285689839cca9ecf73488a63bc.png";
import imgEllipse1 from "figma:asset/4d7b01325700bd8cb1e502fa3ecdf0da9f44ac43.png";
import imgEllipse2 from "figma:asset/8702429ce1cea07f143a210650a8a9ab744054c0.png";
import imgEllipse3 from "figma:asset/59c4347faa7c65afb64c55cfcfcb5666417fccc8.png";
import imgRectangle7 from "figma:asset/4de2ca5b5514601bc0ec53f18752b0cdd3473add.png";
import imgImage2 from "figma:asset/68414cded50bbc914ace397165feabdfe8a973c0.png";
import imgImage3 from "figma:asset/d4fab2fddec05576e14e22704b19701f75022c11.png";
import imgRectangle9 from "figma:asset/4608a01ab5d54115cf744511722f1c9063abaa6b.png";
import imgRectangle10 from "figma:asset/3bbe643b1af7c3c484e18c49666cf53c0f08b9c5.png";
import imgRectangle11 from "figma:asset/08dbb2fbc3a0c8c3f3136caba4e5c9083db74228.png";
import imgImage4 from "figma:asset/708face173c60623249a370fe6c16bf60d13967b.png";
import imgImage5 from "figma:asset/312385c885bc72132e79271d287a1abb818646c3.png";
import imgImage6 from "figma:asset/f6139b68176eb75d6d0f5e36b52aab5fb6f7a820.png";

interface ServiceIcon {
  image: string;
  label: string;
  active: boolean;
}

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  mainImage: string;
  tools: string[];
  services: ServiceIcon[];
}

const slides: Slide[] = [
  {
    id: 0,
    title: "UI/UX Developer",
    subtitle: "Intuitive, user-first web and app interfaces.",
    mainImage: imgRectangle7,
    tools: [imgImage2, imgRectangle8, imgImage3],
    services: [
      {
        image: imgEllipse1,
        label: "UI/UX Design",
        active: true,
      },
      {
        image: imgEllipse2,
        label: "Multimedia Design",
        active: false,
      },
      {
        image: imgEllipse1,
        label: "Business Analysis",
        active: false,
      },
      {
        image: imgEllipse3,
        label: "Project Management",
        active: false,
      },
    ],
  },
  {
    id: 1,
    title: "Multimedia Design",
    subtitle:
      "Create graphics, edit images, and produce engaging videos.",
    mainImage: imgRectangle10,
    tools: [imgImage2, imgImage4, imgImage5],
    services: [
      {
        image: imgEllipse1,
        label: "UI/UX Design",
        active: false,
      },
      {
        image: imgEllipse2,
        label: "Multimedia Design",
        active: true,
      },
      {
        image: imgEllipse1,
        label: "Business Analysis",
        active: false,
      },
      {
        image: imgEllipse3,
        label: "Project Management",
        active: false,
      },
    ],
  },
  {
    id: 2,
    title: "Business Analysis",
    subtitle: "Align user needs with business goals.",
    mainImage: imgRectangle9,
    tools: [],
    services: [
      {
        image: imgEllipse1,
        label: "UI/UX Design",
        active: false,
      },
      {
        image: imgEllipse1,
        label: "Multimedia Design",
        active: false,
      },
      {
        image: imgEllipse1,
        label: "Business Analysis",
        active: true,
      },
      {
        image: imgEllipse3,
        label: "Project Management",
        active: false,
      },
    ],
  },
  {
    id: 3,
    title: "Project Management",
    subtitle:
      "Deliver projects efficiently from concept to completion.",
    mainImage: imgRectangle11,
    tools: [],
    services: [
      {
        image: imgEllipse1,
        label: "UI/UX Design",
        active: false,
      },
      { image: imgEllipse1, label: "Branding", active: false },
      {
        image: imgEllipse1,
        label: "Business Analysis",
        active: false,
      },
      {
        image: imgEllipse3,
        label: "Project Management",
        active: true,
      },
    ],
  },
];

function TypingText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    setDisplayedText("");
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <>{displayedText}</>;
}

export function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newSlide =
      (currentSlide + newDirection + slides.length) %
      slides.length;
    setPage([newSlide, newDirection]);
    setCurrentSlide(newSlide);
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      aria-label="Services - What Charles Ley does"
      id="services-section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dxunairgk/video/upload/v1762617282/1409899-uhd_3840_2160_25fps_hkqzip.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for better content visibility */}
        <div className="absolute inset-0 bg-brand-beige/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-28 max-w-[1512px]">
        {/* Header with Title and Navigation */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div className="flex-1">
            <motion.h2
              className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif] mb-3"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "1.1",
                color: "#F9D67A",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What He Does
            </motion.h2>
            <motion.p
              className="text-white max-w-xl"
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                lineHeight: "1.5",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Designing smooth, smart, and stunning digital
              experiences.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex items-center gap-3">
            <motion.button
              onClick={() => paginate(-1)}
              className="group bg-white hover:bg-brand-teal p-3 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              className="group bg-white hover:bg-brand-teal p-3 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mb-6 md:mb-8">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              onClick={() => {
                setPage([index, index > currentSlide ? 1 : -1]);
                setCurrentSlide(index);
              }}
              className="group relative flex-1 h-1.5 bg-brand-teal/20 rounded-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              aria-label={`Go to ${slide.title}`}
            >
              <motion.div
                className="absolute inset-0 bg-brand-teal rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: index === currentSlide ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* Main Content Card */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Main Card */}
          <div className="flex-1 lg:order-1">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="wait"
            >
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: {
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                  opacity: { duration: 0.3 },
                }}
                className="relative rounded-tl-[53px] rounded-tr-[53px] rounded-bl-[53px] shadow-2xl"
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 rounded-tl-[53px] rounded-tr-[53px] rounded-bl-[53px] overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={currentSlideData.mainImage}
                    alt={`${currentSlideData.title} - Charles Ley Baldemor UI/UX design services and digital solutions showcase`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                </motion.div>

                {/* Content Section - Overlaid */}
                <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-end px-8 md:px-12 lg:px-14 py-8 md:py-12 lg:py-16">
                  <motion.h3
                    className="font-['Komika_Axis','Impact','Arial_Black',sans-serif] mb-4 md:mb-6 uppercase"
                    style={{
                      fontSize: "clamp(40px, 6vw, 80px)",
                      lineHeight: "1.1",
                      color: "#f9d67a",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {currentSlideData.title}
                  </motion.h3>

                  <motion.p
                    className="text-white mb-8 md:mb-12"
                    style={{
                      fontSize: "clamp(18px, 2.5vw, 35px)",
                      lineHeight: "1.5",
                      fontWeight: "600",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.p>

                  {/* Tools Row */}
                  {currentSlideData.tools.length > 0 && (
                    <motion.div
                      className="flex gap-6 md:gap-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentSlideData.tools.map(
                        (tool, index) => (
                          <motion.div
                            key={index}
                            className="bg-white rounded-sm overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.5 + index * 0.05,
                            }}
                          >
                            <img
                              src={tool}
                              alt={`Tool ${index + 1}`}
                              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
                            />
                          </motion.div>
                        ),
                      )}
                    </motion.div>
                  )}

                  {(currentSlideData.id === 2 ||
                    currentSlideData.id === 3) && (
                    <motion.div
                      className="mt-6 md:mt-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <img
                        src={imgImage6}
                        alt="Google Suite"
                        className="h-12 md:h-16 lg:h-20 object-contain rounded-[30px]"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                  <button
                    onClick={() => paginate(-1)}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg active:scale-95 transition-transform"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-brand-teal" />
                  </button>
                  <button
                    onClick={() => paginate(1)}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg active:scale-95 transition-transform"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 text-brand-teal" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Service Categories - Separated */}
          <div className="w-full lg:w-80 lg:order-2 grid grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
            {slides[0].services.map((_, index) => {
              const service = currentSlideData.services[index];
              return (
                <motion.button
                  key={`service-${index}`}
                  onClick={() => {
                    const slideIndex = slides.findIndex(
                      (slide) => slide.services[index].active,
                    );
                    if (slideIndex !== -1) {
                      setPage([
                        slideIndex,
                        slideIndex > currentSlide ? 1 : -1,
                      ]);
                      setCurrentSlide(slideIndex);
                    }
                  }}
                  className={`group relative flex flex-col items-center p-4 md:p-6 rounded-2xl transition-all duration-300 ${
                    service.active
                      ? "bg-brand-teal shadow-xl"
                      : "bg-white hover:bg-brand-beige shadow-md"
                  }`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {service.active && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-brand-orange rounded-full shadow-lg"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3"
                  />
                  <span
                    className={`text-center transition-colors ${
                      service.active
                        ? "text-white"
                        : "text-brand-teal/70 group-hover:text-brand-teal"
                    }`}
                    style={{
                      fontSize: "clamp(12px, 1.5vw, 16px)",
                      lineHeight: "1.3",
                    }}
                  >
                    {service.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}