import React, { FC } from "react";
interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta?: string;
}
interface PricingSectionProps {
  plans: PricingPlan[];
}
const PricingSection: React.FC<PricingSectionProps> = ({ plans }) => {
  return (
    <section className="bg-gray-100 py-16 lg:py-24 dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12 dark:text-gray-100">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] dark:bg-gray-800 dark:shadow-2xl dark:hover:scale-[1.03]"
            >
              <h3 className="text-2xl font-bold text-fuchsia-600 mb-4 dark:text-fuchsia-400">
                {plan.name}
              </h3>
              <p className="text-4xl font-extrabold text-gray-900 mb-6 dark:text-gray-100">
                {plan.price}
                {plan.price !== "Free" && plan.price !== "Custom" && (
                  <span className="text-lg font-medium text-gray-500 dark:text-gray-400">
                    /month
                  </span>
                )}
              </p>
              <ul className="text-gray-700 space-y-3 mb-8 text-left w-full max-w-[200px] dark:text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 transition-colors duration-200 dark:bg-fuchsia-700 dark:hover:bg-fuchsia-600 dark:focus:ring-offset-gray-800">
                {plan.cta || `Choose ${plan.name}`}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection;
