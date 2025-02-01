"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import StyledFonts from "@/components/shared/StyledFonts";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is the check-in/check-out time?",
    answer: "Check-in time is 3:00 pm and check-out time is 12:00 pm.",
  },
  {
    question: "Do you offer airport transportation?",
    answer:
      "Yes, we offer airport shuttle service for our guests. Please contact the front desk at least 24 hours in advance to arrange transportation.",
  },
  {
    question: "Can I cancel my room booking?",
    answer:
      "Yes, you can cancel your booking up to 48 hours before your check-in date for a full refund. Cancellations made within 48 hours may be subject to a cancellation fee.",
  },
  {
    question: "Are pets allowed at the hotel?",
    answer:
      "We welcome well-behaved pets under 25 pounds. There is a non-refundable pet fee of $50 per stay. Please inform us in advance if you plan to bring a pet.",
  },
];

const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ item, isOpen, toggleOpen }) => {
  return (
    <div className="border-b borde-b-[2px] border-gray-400">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleOpen}
      >
        <span className="text-2xl">
          <StyledFonts
            fontFamily="Playfair Display"
            text={item.question}
            color="#343935"
          />
        </span>
        <ChevronDown
          className={`w-10 h-10 font-light text-[#C9AC79] transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-sm text-gray-500">{item.answer}</p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto px-4 pt-12">
      <div className="space-y-8 flex flex-col lg:flex-row">
        <div className="flex-1 lg:pl-16 space-y-2">
          <h2 className="text-xl font-light uppercase tracking-wider text-[#C9AC79]">
            F.A.Q
          </h2>
          <h1 className="text-3xl md:text-5xl font-serif text-gray-600">
            <StyledFonts
              fontFamily="Playfair Display"
              text={`Questions`}
              color="#343935"
            />
          </h1>
        </div>

        <div className="flex-1 flex-grow-[1.8] space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
