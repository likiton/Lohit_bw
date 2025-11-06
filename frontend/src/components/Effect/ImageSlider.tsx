import React, { useState, useEffect } from "react";

const images = [
  "/top_v.webp",
  "/side_home_v.webp",
  "/home_v.webp",
  "/BoatBridge-Honavar.webp",
  "river_v.webp",
  "/HonnavarBoating28.webp",
  "/river_v.webp",
  "/OIP.webp",
  "/Screenshot_20250105-073619_Chrome-890x1024.webp",
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full flex justify-center items-center overflow-hidden
                 h-[240px] sm:h-[300px] md:h-[420px] lg:h-[500px]
                 bg-gradient-to-br from-indigo-100/40 to-indigo-200/30
                 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
    >
      {/* Glass overlay for a smooth transparent look */}
      <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-md pointer-events-none" />

      {images.map((src, index) => {
        const position = (index - currentIndex + images.length) % images.length;

        let style: React.CSSProperties = {
          transform: "translateX(0)",
          zIndex: 10,
          opacity: 0,
          filter: "blur(4px)",
          transition: "all 1s ease-in-out",
        };

        if (position === 0) {
          // Center (main)
          style = {
            transform: "translateX(0) scale(1)",
            zIndex: 30,
            opacity: 1,
            filter: "blur(0)",
            transition: "all 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
          };
        } else if (position === 1) {
          // Right side
          style = {
            transform: "translateX(140px) scale(0.85) rotateY(-20deg)",
            zIndex: 20,
            opacity: 0.8,
            filter: "blur(1px)",
          };
        } else if (position === images.length - 1) {
          // Left side
          style = {
            transform: "translateX(-140px) scale(0.85) rotateY(20deg)",
            zIndex: 20,
            opacity: 0.8,
            filter: "blur(1px)",
          };
        }

        return (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            style={style}
            className="absolute rounded-3xl object-cover
                       transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)]
                       w-56 h-40 sm:w-72 sm:h-52 md:w-[400px] md:h-[280px] lg:w-[480px] lg:h-[320px]
                       shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          />
        );
      })}
    </div>
  );
};

export default ImageSlider;
