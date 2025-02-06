"use client";

import React, { useState } from "react";

// FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQPage: React.FC = () => {
  // Sample FAQ data
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How we serve food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      id: 2,
      question: "How is our food quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      id: 3,
      question: "How do we give home delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      id: 4,
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      id: 5,
      question: "What will be delivered? And when?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      id: 6,
      question: "Is this restaurant 24 hours open?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
  ];

  // State for managing open FAQ
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Toggle FAQ visibility
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Questions Looks Here
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-md shadow-sm p-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <button
                  className={`transform ${
                    openFAQ === faq.id ? "rotate-45" : ""
                  } text-2xl text-gray-600`}
                >
                  {openFAQ === faq.id ? "−" : "+"}
                </button>
              </div>
              {openFAQ === faq.id && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
