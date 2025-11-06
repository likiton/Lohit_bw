import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Avyukta?",
    answer:
      "Avyukta is your gateway to peace, adventure, and the timeless beauty of the open waters. We provide private boating experiences and curated trips.",
  },
  {
    question: "How can I book a trip?",
    answer:
      "You can book directly through our website or contact our support team via WhatsApp or Instagram for a personalized booking.",
  },
  {
    question: "Are the trips safe for families?",
    answer:
      "Yes! All our boats are maintained to the highest standards, with certified crews and modern safety systems to ensure a safe experience.",
  },
  {
    question: "Do you provide private charters?",
    answer:
      "Absolutely. All our trips can be customized and booked as 100% private charters for your family, friends, or special events.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-indigo-100"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-medium text-gray-800">
                  {item.question}
                </span>
                {isActive ? (
                  <ChevronUp className="w-6 h-6 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-indigo-600" />
                )}
              </button>

              {/* Answer with animation */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 sm:px-5 pb-4 text-gray-700 text-base sm:text-lg"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
