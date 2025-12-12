import React, { FC } from "react";
interface HeroSectionProps {
  headline: string;
  sub?: string;
  cta_text?: string;
  image_url?: string | null;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  sub,
  cta_text,
  image_url
}) => {
  const imageUrl = image_url || "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600 to-pink-500 py-16 lg:py-24 text-white">
      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            {headline}
          </h1>
          {sub && (
            <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-xl mx-auto lg:mx-0">
              {sub}
            </p>
          )}
          {cta_text && (
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-md text-fuchsia-600 bg-white hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-fuchsia-600 focus:ring-white transition-colors duration-200 dark:text-fuchsia-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:focus:ring-offset-gray-900">
              {cta_text}
            </button>
          )}
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={imageUrl}
            alt="Hero illustration"
            className="w-full max-w-md lg:max-w-xl rounded-lg shadow-xl object-cover h-auto"
            width="600"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
