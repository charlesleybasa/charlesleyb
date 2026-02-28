import { ServicesSlider } from "./components/ServicesSlider";
import { VideoPortfolio } from "./components/VideoPortfolio";
import { ContactForm } from "./components/ContactForm";
import { MobileMockup } from "./components/MobileMockup";
import { GridOverlay } from "./components/GridOverlay";
import { ChatBot } from "./components/ChatBot";
import {
  RevealText,
  RevealWords,
  RevealChars,
} from "./components/RevealText";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { TypingText } from "./components/TypingText";
import { BackgroundMusic } from "./components/BackgroundMusic";
import imgRectangle8 from "figma:asset/fc92f8cf568f27285689839cca9ecf73488a63bc.png";
import imgEllipse1 from "figma:asset/4d7b01325700bd8cb1e502fa3ecdf0da9f44ac43.png";
import imgEllipse2 from "figma:asset/8702429ce1cea07f143a210650a8a9ab744054c0.png";
import imgEllipse3 from "figma:asset/59c4347faa7c65afb64c55cfcfcb5666417fccc8.png";
import imgRectangle7 from "figma:asset/4de2ca5b5514601bc0ec53f18752b0cdd3473add.png";
import imgImage2 from "figma:asset/68414cded50bbc914ace397165feabdfe8a973c0.png";
import imgImage3 from "figma:asset/d4fab2fddec05576e14e22704b19701f75022c11.png";
import imgGeminiGeneratedImageT20Hcct20Hcct20H1 from "figma:asset/dba2f60d49ab0326a8d74ba0788aac2cf844754e.png";
import imgGrungyGrayMarbleTexturedBackground1 from "figma:asset/79ab609ee21f2bf5bd9e13f67ea4dc0460ea9c11.png";
import imgRectangle9 from "figma:asset/5553f5805982bbc4e126643fe2ce20d28fb4158d.png";
import imgRectangle12 from "figma:asset/99b93b56cbe2892866e7aa9b19cc2d63c3fe5d6f.png";
import imgRectangle14 from "figma:asset/e30c19f911b277859687a7b8c169473b5af59f37.png";
import imgRectangle15 from "figma:asset/8a323ed96ac420fee6680b17b1d00a3d72c42e0c.png";
import imgRectangle16 from "figma:asset/0e927d359db53452a3b098b9168dd43b969af397.png";
import imgRectangle13 from "figma:asset/1ef9b40d6ad9e4994908f74840b15f59b8250797.png";
import imgRectangle10 from "figma:asset/63346dcfbb285332673bebcd6eb0d7d3a700ae1d.png";
import imgRectangle11 from "figma:asset/f6b4315aafa208cae449a758362b3dfb88148b80.png";
import imgScreenshot20251102At105636Pm1 from "figma:asset/5956b308ed89fb71e8ccdc4c027211abcfb6f368.png";
import imgPlasticBlueCloudWithDownloadArrow1 from "figma:asset/c62d95b3179d829eac6acb2f848dd7641602b91a.png";
import imgImage4 from "figma:asset/708face173c60623249a370fe6c16bf60d13967b.png";
import imgImage5 from "figma:asset/312385c885bc72132e79271d287a1abb818646c3.png";
import imgImage6 from "figma:asset/f6139b68176eb75d6d0f5e36b52aab5fb6f7a820.png";
import imgCharlesLeyPortrait from "figma:asset/9bab43d520e132e4518f33ecf84d0e718849d4f3.png";
import {
  motion,
  AnimatePresence,
  useInView,
} from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Animated Counter Component
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Stat Card Component
function StatCard({
  icon,
  number,
  suffix,
  label,
  description,
  delay = 0,
  autoHover = false,
}: {
  icon: string;
  number: number;
  suffix: string;
  label: string;
  description: string;
  delay?: number;
  autoHover?: boolean;
}) {
  const [isActive, setIsActive] = useState(false);

  // Sync autoHover prop with isActive state
  useEffect(() => {
    setIsActive(autoHover);
  }, [autoHover]);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative overflow-hidden rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 border shadow-md cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          backgroundImage: isActive
            ? "linear-gradient(to bottom right, #097C87, #1a1a1a)"
            : "linear-gradient(to bottom right, #ffffff, #ffffff)",
        }}
        initial={{
          borderColor: "rgba(9, 124, 135, 0.2)",
        }}
        animate={{
          borderColor: isActive
            ? "rgba(9, 124, 135, 0.4)"
            : "rgba(9, 124, 135, 0.2)",
          rotateY: isActive ? 5 : 0,
        }}
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          borderColor: { duration: 0.4 },
          rotateY: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.2 },
        }}
        onHoverStart={() => setIsActive(true)}
        onHoverEnd={() => setIsActive(false)}
        onTap={() => setIsActive(!isActive)}
      >
        {/* Glass shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{
            opacity: isActive ? 1 : 0,
            x: isActive ? "100%" : "-100%",
          }}
          transition={{
            opacity: { duration: 0.3 },
            x: { duration: 0.8, ease: "easeInOut" },
          }}
          style={{
            backdropFilter: "blur(10px)",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
            animate={{
              filter: isActive
                ? "brightness(1.5)"
                : "brightness(1)",
            }}
            transition={{ duration: 0.4 }}
          >
            {icon}
          </motion.div>

          {/* Number */}
          <div className="mb-2">
            <motion.span
              className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif]"
              style={{
                fontSize: "clamp(32px, 8vw, 56px)",
                lineHeight: "1",
              }}
              animate={{
                color: isActive ? "#ffffff" : "#097c87",
              }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedCounter
                target={number}
                suffix={suffix}
                duration={2}
              />
            </motion.span>
          </div>

          {/* Label */}
          <motion.div
            className="font-bold mb-2"
            style={{ fontSize: "clamp(16px, 3vw, 24px)" }}
            animate={{
              color: isActive ? "#ffffff" : "#097c87",
            }}
            transition={{ duration: 0.4 }}
          >
            {label}
          </motion.div>

          {/* Description */}
          <motion.p
            className="hidden sm:block"
            style={{
              fontSize: "clamp(12px, 1.5vw, 14px)",
              lineHeight: "1.4",
            }}
            animate={{
              color: isActive
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(9, 124, 135, 0.6)",
            }}
            transition={{ duration: 0.4 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Stats Section with Sequential Auto-Hover
function StatsSection() {
  const [autoHoverStates, setAutoHoverStates] = useState([
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      // Trigger hover effects sequentially: card 1 -> card 2 -> card 3
      const timeouts: NodeJS.Timeout[] = [];

      // Card 1: activate at 0.5s, deactivate at 1.5s
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([true, false, false]);
        }, 500),
      );
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([false, false, false]);
        }, 1500),
      );

      // Card 2: activate at 1.7s, deactivate at 2.7s
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([false, true, false]);
        }, 1700),
      );
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([false, false, false]);
        }, 2700),
      );

      // Card 3: activate at 2.9s, deactivate at 3.9s
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([false, false, true]);
        }, 2900),
      );
      timeouts.push(
        setTimeout(() => {
          setAutoHoverStates([false, false, false]);
        }, 3900),
      );

      return () => {
        timeouts.forEach((timeout) => clearTimeout(timeout));
      };
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-20 bg-brand-beige/30"
      aria-label="Charles Ley statistics and achievements"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-28 max-w-[1512px]">
        {/* Stats Grid - 3 columns on all screens */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <StatCard
            icon="🖥️"
            number={10}
            suffix="+"
            label="Years of Experience"
            description="Designing for startups and enterprises"
            delay={0}
            autoHover={autoHoverStates[0]}
          />
          <StatCard
            icon="🎨"
            number={80}
            suffix="+"
            label="Projects"
            description="Built with data-driven design principles"
            delay={0.15}
            autoHover={autoHoverStates[1]}
          />
          <StatCard
            icon="🕒"
            number={101}
            suffix="%"
            label="Faster Delivery"
            description="Through AI-enhanced UX design"
            delay={0.3}
            autoHover={autoHoverStates[2]}
          />
        </div>
      </div>
    </section>
  );
}

// Simple Typing Animation Component
function SimpleTypingText({
  text,
  delay = 0,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <p className={className} style={style}>
      {displayedText}
    </p>
  );
}

export default function App() {
  return (
    <>
      <SEO />
      <BackgroundMusic />
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <header
          className="relative min-h-[600px] md:min-h-[900px] overflow-hidden"
          role="banner"
          aria-label="Hero section - Charles Ley Baldemor introduction"
        >
          <img
            src={imgScreenshot20251102At105636Pm1}
            alt="Charles Ley Baldemor UI/UX Designer creative workspace showcasing modern design elements and digital innovation from Metro Manila Philippines"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          
          {/* Gradient Overlay - Full viewport width */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, rgba(217, 217, 217, 0.00) 34.89%, #097C87 100%)",
            }}
            aria-hidden="true"
          />
          
          <div className="relative z-10 min-h-[700px] sm:min-h-[750px] lg:h-[902px] mx-auto max-w-[1512px] px-6 py-12 lg:px-0 lg:py-0">
            {/* Grid Overlay with Interactive Lines */}
            <GridOverlay rows={8} cols={12} />

            {/* Main heading - Only h1 on the page */}
            <motion.div
              className="relative lg:absolute lg:top-[123px] lg:left-[112px] lg:w-[590px]"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif] leading-tight not-italic text-white mb-2 lg:mb-0">
                <span
                  className="block"
                  style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
                >
                  Charles Ley's
                </span>
                <span
                  className="block font-['Island_Moments','Brush_Script_MT',cursive] leading-none -mt-10 mb-2 lg:mb-0 lg:mt-0"
                  style={{ fontSize: "clamp(80px, 15vw, 200px)" }}
                >
                  Creations
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="absolute lg:absolute font-medium leading-relaxed text-white max-w-[648px] bottom-[200px] left-6 right-6 sm:bottom-[220px] md:bottom-[240px] lg:bottom-auto lg:top-[408px] lg:left-[112px] lg:right-auto lg:w-[648px] z-20"
              style={{ fontSize: "clamp(14px, 2vw, 25px)" }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Hi! I'm Charles Ley Baldemor—
              <TypingText
                words={[
                  "Forever 21",
                  "AI Developer",
                  "UI/UX Developer",
                  "Business Analyst",
                  "Project Manager",
                ]}
              />
              <br />
              at heart. Staying young keeps my ideas fresh,
              innovative, and in tune with the latest trends.
              Passion fuels everything I do, especially in
              software design.
            </motion.p>

            {/* Buttons Container - Flex on mobile, absolute on desktop */}
            <motion.div
              className="absolute flex flex-row gap-2 sm:gap-4 lg:gap-6 bottom-6 left-4 right-4 sm:left-6 sm:right-6 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 lg:left-[112px] lg:right-auto z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Download Resume Button - Primary */}
              <button
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1O1sq5EF8b3zNR8U-vGy1rY9VW6W0ZweB/edit?usp=sharing&ouid=109372209012840293689&rtpof=true&sd=true",
                    "_blank",
                  );
                }}
                className="bg-white hover:bg-brand-beige transition-all duration-300 h-[52px] sm:h-[60px] lg:h-[70px] rounded-full px-4 sm:px-8 lg:px-10 font-bold text-brand-teal shadow-lg hover:shadow-xl hover:scale-[1.02] whitespace-nowrap flex-1 sm:flex-none flex items-center justify-center"
                style={{ fontSize: "clamp(12px, 1.5vw, 19px)" }}
                aria-label="Download Charles Ley's resume PDF"
              >
                Download Resume
              </button>

              {/* View My Work - Outline Button */}
              <button
                onClick={() => {
                  const portfolioSection =
                    document.getElementById(
                      "portfolio-section",
                    );
                  portfolioSection?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 h-[52px] sm:h-[60px] lg:h-[70px] rounded-full px-4 sm:px-8 lg:px-10 font-bold text-white shadow-lg hover:scale-[1.02] whitespace-nowrap flex-1 sm:flex-none flex items-center justify-center"
                style={{ fontSize: "clamp(12px, 1.5vw, 19px)" }}
                aria-label="Scroll to portfolio section"
              >
                View My Work
              </button>
            </motion.div>

            {/* LETS COLLABORATE */}
            <button
              className="flex absolute font-bold gap-2 items-center leading-none not-italic text-nowrap text-white top-4 right-4 md:top-6 md:right-6 lg:top-[805px] lg:right-6 xl:right-12 tracking-wide hover:scale-105 transition-transform duration-300 cursor-pointer bg-transparent border-0"
              style={{ fontSize: "clamp(14px, 1.5vw, 19px)" }}
              onClick={() => {
                const contactSection = document.getElementById(
                  "contact-section",
                );
                contactSection?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-label="Scroll to contact section to collaborate"
            >
              <span className="relative shrink-0">
                LETS COLLABORATE
              </span>
              <span
                className="relative shrink-0 text-brand-yellow"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {/* About Section */}
          <section
          className="relative py-16 md:py-24 overflow-hidden"
          aria-label="About Charles Ley Baldemor"
          id="about-section"
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${imgGrungyGrayMarbleTexturedBackground1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Elegant marble texture background"
          />
          <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-28 max-w-[1512px]">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <RevealText variant="slideRight" delay={0.2}>
                <div className="relative shrink-0">
                  <div
                    className="rounded-tl-[53px] rounded-tr-[53px] rounded-bl-[53px] overflow-hidden w-[300px] h-[550px] md:w-[379px] md:h-[537px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #097C87 27.36%, #A2CCA8 99.95%)",
                    }}
                  >
                    <img
                      src={imgCharlesLeyPortrait}
                      alt="Charles Ley Baldemor - Professional UI/UX Designer, Developer and Multimedia Artist portrait from Metro Manila Philippines"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </RevealText>

              <div
                className="hidden lg:block w-[2px] bg-[#097c87] self-stretch my-8"
                role="separator"
                aria-hidden="true"
              />

              <div className="flex-1 text-brand-teal max-w-[850px]">
                <h2
                  className="font-['Jaini_Purva','Comic_Sans_MS',cursive] mb-8"
                  style={{
                    fontSize: "clamp(50px, 6vw, 100px)",
                    lineHeight: "1.2",
                  }}
                >
                  <RevealChars
                    text="About Him"
                    delay={0.3}
                  />
                </h2>
                <div
                  className="font-semibold mb-12"
                  style={{
                    fontSize: "clamp(24px, 3vw, 35px)",
                    lineHeight: "1.4",
                  }}
                >
                  <RevealWords
                    text="The designer who believes in simplicity, empathy, and purpose."
                    delay={0.5}
                  />
                </div>
                <RevealText variant="luxury" delay={0.7}>
                  <SimpleTypingText
                    text="With 10+ years in UI/UX and product design, I craft functional, aesthetic, and accessible web and mobile interfaces — turning complex problems into simple, user-focused solutions aligned with business goals."
                    delay={700}
                    className="font-medium"
                    style={{
                      fontSize: "clamp(18px, 2vw, 25px)",
                      lineHeight: "1.7",
                    }}
                  />
                </RevealText>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* What He Does Section */}
        <ServicesSlider />

        {/* Portfolio Section */}
        <section
          id="portfolio-section"
          className="py-16 md:py-24 bg-white"
          aria-label="Portfolio showcase - Selected design projects"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-28 max-w-[1512px]">
            <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
              {/* Left: Title */}
              <div className="flex-shrink-0">
                <RevealText variant="luxury" delay={0.2}>
                  <h2
                    className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif] text-brand-teal"
                    style={{
                      fontSize: "clamp(40px, 5vw, 80px)",
                      lineHeight: "1.2",
                    }}
                  >
                    Charles Ley's
                    <span
                      className="block font-['Island_Moments','Brush_Script_MT',cursive] -mt-4 lg:-mt-6"
                      style={{
                        fontSize: "clamp(80px, 12vw, 200px)",
                        lineHeight: "1",
                      }}
                    >
                      Portfolio
                    </span>
                  </h2>
                </RevealText>
              </div>

              {/* Right: Description */}
              <div className="flex-1 lg:max-w-xl lg:pt-8">
                <RevealText variant="luxury" delay={0.4}>
                  <p
                    className="font-medium text-brand-teal"
                    style={{
                      fontSize: "clamp(16px, 1.8vw, 22px)",
                      lineHeight: "1.7",
                    }}
                  >
                    Explore selected projects that highlight
                    creativity, strategy, and real-world
                    results. Each design tells a story — crafted
                    with empathy, clarity, and purpose.
                  </p>
                </RevealText>
              </div>
            </div>

            {/* Masonry Grid */}
            <VideoPortfolio
              videoIds={[
                "LeXYkGQHZoc",
                "Je6Xwtogh4k",
                "7fwK1PqP03E",
                "YLlfyzPxIU4",
                "dSbzmb2tN-w",
                "tEhYd7JI3Ps",
                "5fkIGB5vE0k",
                "zSkeK13DAgk",
                "Vnm5mNcRBas",
                "zgReIYeodTw",
              ]}
            />
          </div>

          {/* Contact Section */}
          <section
            id="contact-section"
            className="container mx-auto px-4 md:px-8 lg:px-28 max-w-[1512px] mt-24 md:mt-32"
            aria-label="Contact form and collaboration"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Contact Form */}
              <div>
                <ContactForm />
              </div>

              {/* Right: Mobile Mockup */}
              <div className="flex items-center justify-center lg:justify-end">
                <MobileMockup videoUrl="https://res.cloudinary.com/dxunairgk/video/upload/v1762505551/v09044g40000cpcs6dvog65jk0h22c70_jlcazy.mp4" />
              </div>
            </div>
          </section>
        </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating ChatBot */}
        <ChatBot />
      </div>
    </>
  );
}