import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact Form Submission",
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`,
    );

    const mailtoLink = `mailto:charlesleyb24@gmail.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -40, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-brand-teal/10"
    >
      <h2
        className="font-['Inknut_Antiqua',Rockwell,'Courier_Bold',Courier,Georgia,Times,'Times_New_Roman',serif] text-brand-teal mb-2"
        style={{
          fontSize: "clamp(32px, 4vw, 56px)",
          lineHeight: "1.2",
        }}
      >
        Let's Collaborate
      </h2>
      <p
        className="text-brand-teal/70 mb-8"
        style={{
          fontSize: "clamp(14px, 1.5vw, 18px)",
          lineHeight: "1.6",
        }}
      >
        Have a project in mind? Let's bring your vision to life.
      </p>

      {isSubmitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <p className="text-xl text-brand-teal font-semibold">
            Thank you! Your message has been sent.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-brand-teal font-semibold"
            >
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="border-2 border-brand-teal/20 focus:border-brand-teal rounded-xl h-12 px-4 transition-all"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-brand-teal font-semibold"
            >
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="border-2 border-brand-teal/20 focus:border-brand-teal rounded-xl h-12 px-4 transition-all"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-brand-teal/70 font-semibold"
            >
              Phone <span className="text-sm">(optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+63 XXX XXXX XXX"
              className="border-2 border-brand-teal/20 focus:border-brand-teal rounded-xl h-12 px-4 transition-all"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label
              htmlFor="subject"
              className="text-brand-teal font-semibold"
            >
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="border-2 border-brand-teal/20 focus:border-brand-teal rounded-xl h-12 px-4 transition-all"
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-brand-teal font-semibold"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={6}
              className="border-2 border-brand-teal/20 focus:border-brand-teal rounded-xl px-4 py-3 resize-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white rounded-xl h-14 font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            style={{
              fontSize: "clamp(16px, 1.5vw, 20px)",
            }}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Send className="w-5 h-5" />
              </motion.div>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}