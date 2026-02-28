import { Mail, Phone } from "lucide-react";
import { RevealText } from "./RevealText";

export function Footer() {
  return (
    <footer className="bg-brand-teal text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-28 max-w-[1512px]">
        <RevealText variant="luxury" delay={0.2}>
          <div className="text-center">
            {/* Title */}
            <h3
              className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif] mb-8"
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: "1.2",
              }}
            >
              Get in Touch
            </h3>

            {/* Contact Details */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
              {/* Email */}
              <a
                href="mailto:charlesleyb24@gmail.com"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors duration-300 group"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>charlesleyb24@gmail.com</span>
              </a>

              {/* Divider */}
              <span className="hidden md:inline-block text-brand-orange">|</span>

              {/* Phone */}
              <a
                href="tel:09478800962"
                className="flex items-center gap-2 hover:text-brand-orange transition-colors duration-300 group"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                }}
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>09478800962</span>
              </a>
            </div>

            {/* Copyright */}
            <p
              className="text-white/70"
              style={{
                fontSize: "clamp(12px, 1.2vw, 14px)",
              }}
            >
              © {new Date().getFullYear()} Charles Ley Baldemor. All rights reserved.
            </p>
          </div>
        </RevealText>
      </div>
    </footer>
  );
}
