import React, { FC } from "react";
interface FeatureItem {
  title: string;
  desc: string;
}
interface FeaturesSectionProps {
  items: FeatureItem[];
}
const FeaturesSection: React.FC<FeaturesSectionProps> = ({ items }) => {
  return (
    <section className="bg-white py-16 lg:py-24 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 dark:text-gray-100">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 dark:bg-gray-800 dark:shadow-xl dark:hover:scale-[1.02] dark:hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-fuchsia-600 mb-3 dark:text-fuchsia-400">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
