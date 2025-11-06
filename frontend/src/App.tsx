import "./App.css";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLock,
  FaMapMarkedAlt,
  FaCameraRetro,
  FaDollarSign,
  FaSun,
  FaShieldAlt,
} from "react-icons/fa";

import NavigationBar from "./components/navigation/NavigationBar";
import HeroSection from "./components/sections/HeroSection";
import Section from "./components/layout/Section";
import Footer from "./components/layout/Footer";

import { FeatureCardProps } from "./types";
import { Pricing } from "./components/sections/Pricing";
import { CountUpStat } from "./components/Effect/CountUpstat";
import PlanTrip from "./components/sections/PlanTrip";
import PreWedding from "./components/sections/PreWedding";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import ImageSlider from "./components/Effect/ImageSlider";
import FAQ from "./components/layout/FAQ";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="bg-white/80 backdrop-blur-xl border border-indigo-100 shadow-lg hover:shadow-2xl p-6 sm:p-7 rounded-xl flex flex-col items-center text-center transition-all duration-300"
    >
      <div className="text-indigo-600 mb-3 drop-shadow-lg text-4xl">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <AnimatePresence>
        {expanded && (
          <motion.p
            key="desc"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-800 border border-indigo-200 px-3 py-1.5 rounded-full transition-all duration-300 hover:bg-indigo-50"
      >
        {expanded ? "Show Less ▲" : "Learn More ▼"}
      </button>
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased overflow-x-hidden">
      {/* Fonts and global style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        html { scroll-behavior: smooth; scroll-padding-top: 100px; overflow-x: hidden; }
        body { font-family: 'Inter', sans-serif; margin: 0; overflow-x: hidden; }
        .hero-section {
          height: 100vh;
          background: linear-gradient(rgba(130,126,247,0.6), rgba(0,0,0,0.8)),
                      url('/src/images/hero.webp'); /* 👈 Replace with your hero image */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }
        @media (max-width: 1024px) { .hero-section { background-attachment: scroll; } }
        @media (max-width: 768px) { .hero-section { height: 80vh; font-size: 0.9rem; padding:0 16px;} }
        @media (max-width:480px) { .hero-section { height:100vh; background-size:cover; } }
      `}</style>

      {/* Navigation Bar */}
      <NavigationBar />

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT US */}
        <Section
          id="aboutUs"
          title="Our Philosophy"
          bgColor="bg-gradient-to-b from-blue-50 to-indigo-50"
        >
          <div className="max-w-6xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-12 items-center overflow-hidden">
            {/* Image Slider */}
            <div className="relative w-full max-w-full overflow-hidden flex justify-center">
              <ImageSlider />
            </div>

            {/* Text Section */}
            <div className="space-y-6 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 leading-tight">
                Where Every Wave Tells a Story 🌊
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to{" "}
                <span className="font-semibold text-indigo-700">Avyukta</span> —
                your gateway to peace, adventure, and the timeless beauty of the
                open waters. Every voyage we offer isn’t just a trip — it’s a
                story waiting to unfold.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether it’s a tranquil sunrise, a day of thrill with friends,
                or a romantic sunset escape, our team ensures your experience is
                effortless, safe, and truly unforgettable.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-start gap-10 pt-6">
                <CountUpStat endValue={1000} label="Happy Riders" suffix="+" />
                <CountUpStat endValue={15} label="Beautiful Routes" suffix="+" />
                <CountUpStat endValue={100} label="Safety Focused" suffix="%" />
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={<FaLock />}
              title="100% Private Charters"
              description="Exclusive access to your vessel and crew — your itinerary, your pace, your experience. Perfect for private events and peaceful escapes."
            />
            <FeatureCard
              icon={<FaMapMarkedAlt />}
              title="Unmatched Local Expertise"
              description="Our captains know every hidden cove, secret beach, and stunning marine path — giving you access to Honnavar’s most beautiful spots."
            />
            <FeatureCard
              icon={<FaCameraRetro />}
              title="Photo-Perfect Scenery"
              description="We guide you to the best lighting and locations so your moments become breathtaking memories captured forever."
            />
            <FeatureCard
              icon={<FaDollarSign />}
              title="Transparent Pricing"
              description="No hidden fees — ever. We believe luxury should be simple, fair, and crystal clear in every detail."
            />
            <FeatureCard
              icon={<FaSun />}
              title="Sunrise & Sunset Voyages"
              description="Witness the day’s most magical transitions — the golden hues, the ocean’s calm, and the romance of dusk."
            />
            <FeatureCard
              icon={<FaShieldAlt />}
              title="Safety First Operation"
              description="Our boats are maintained to the highest standards with certified crews and modern safety systems for your peace of mind."
            />
          </div>
        </Section>

        {/* OTHER SECTIONS */}
        <Section id="pricing" title="Flexible Pricing" bgColor="bg-indigo-50">
          <Pricing />
        </Section>

        <Section id="planTrip" title="Let's Plan Your Journey" bgColor="bg-white">
          <PlanTrip />
        </Section>

        <Section id="preWedding" title="Destination Shoots" bgColor="bg-indigo-50">
          <PreWedding />
        </Section>

        <Section id="gallery" title="Travel Gallery" bgColor="bg-white">
          <Gallery />
        </Section>

        <Section id="contactUs" title="Get in Touch" bgColor="bg-indigo-50">
          <Contact />
        </Section>

        <Section id="Faq" title="FAQ's" bgColor='bg-white'>
          <FAQ />
        </Section>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/+919731520326" // 🔁 Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 backdrop-blur-md bg-opacity-90 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M12.01 2c-5.52 0-10 4.48-10 10 0 1.77.47 3.45 1.36 4.95L2 22l5.22-1.36c1.45.79 3.09 1.21 4.79 1.21h.01c5.52 0 10-4.48 10-10s-4.48-9.85-10.01-9.85zm5.64 14.56c-.23.65-1.33 1.23-1.83 1.31-.47.08-1.06.11-1.72-.11-.39-.13-.9-.29-1.54-.57-2.71-1.18-4.47-3.92-4.61-4.11-.13-.18-1.1-1.46-1.1-2.79 0-1.32.67-1.96.91-2.23.24-.27.52-.34.69-.34.17 0 .35.01.5.01.16.01.37-.06.57.43.21.5.72 1.73.78 1.85.06.12.09.27.02.43-.07.15-.11.24-.21.38-.1.13-.22.29-.31.39-.1.1-.21.21-.09.4.12.18.54.89 1.15 1.45.79.7 1.45.92 1.64 1.02.19.1.31.08.43-.05.12-.13.5-.58.63-.78.13-.2.26-.16.43-.1.18.06 1.13.53 1.32.63.19.1.31.16.36.25.04.09.04.52-.19 1.17z" />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default App;
