"use client";

import { useState } from "react";
import Link from "next/link";

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "Who can contribute?",
      answer: "Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds."
    },
    {
      id: 2,
      question: "Where can we reach out in case of queries?",
      answer: "You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!"
    },
    {
      id: 3,
      question: "Do I need to have coding experience to participate?",
      answer: "While coding experience is beneficial, it's not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you're a beginner you can also look at our mini events"
    },
    {
      id: 4,
      question: "What happens after the hackathon ends?",
      answer: "After the hackathon concludes, top 10 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW. Winners will be announced, and prizes awarded based on the judging criteria. Date for this is 15th April, 2025."
    },
    {
      id: 5,
      question: "How can I stay updated on hackathon announcements and events?",
      answer: "Stay informed about Devcation'25 by joining our Discord Server. Know more about upcoming hackathons and events by GDG IGDTUW by joining our GDG Chapter."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#06254b]">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="mb-4 bg-blue-800 rounded-lg overflow-hidden shadow-lg"
            >
              <button
                className="w-full p-4 text-left text-white font-medium flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96 p-4' : 'max-h-0'}`}
              >
                <p className="text-white">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
          <Link
            href="https://discord.gg/eG4YP3gA48"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] text-white px-6 py-3 rounded-md hover:bg-[#4752c4] transition-colors duration-300 flex items-center justify-center min-w-36"
          >
            Join Discord
          </Link>
          <Link
            href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-md hover:bg-[#1fac53] transition-colors duration-300 flex items-center justify-center min-w-36"
          >
            Join WhatsApp
          </Link>
          <Link
            href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4285F4] text-white px-6 py-3 rounded-md hover:bg-[#3367d6] transition-colors duration-300 flex items-center justify-center min-w-36"
          >
            Join Our Chapter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
