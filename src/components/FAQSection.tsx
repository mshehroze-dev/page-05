import React, { FC, useState } from "react";
interface FAQItem {
  q: string;
  a: string;
}
interface FAQSectionProps {
  items: FAQItem[];
}
const FAQSection: React.FC<FAQSectionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-white py-16 lg:py-24 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 dark:text-gray-100">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm dark:border-gray-700 dark:shadow-md">
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 transition-colors duration-200 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-900"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-white dark:text-gray-300 dark:bg-gray-800">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
