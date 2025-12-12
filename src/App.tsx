import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import "./App.css";
import { NuvraBadge } from './components/NuvraBadge';
function App() {
  return (
  <>
    <NuvraBadge />
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <HeroSection
        headline="Unlock Your Team's Full Potential"
        sub="Streamline workflows, boost collaboration, and achieve your goals faster with our intuitive platform."
        cta_text="Get Started Free"
        image_url="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <FeaturesSection
        items={[
          { "title": "Intuitive Dashboard", "desc": "Access all your essential tools and insights from one centralized, easy-to-navigate dashboard." },
          { "title": "Seamless Collaboration", "desc": "Work together in real-time with shared documents, tasks, and communication channels." },
          { "title": "Powerful Analytics", "desc": "Gain deep insights into your performance with custom reports and data visualizations." },
          { "title": "Secure & Scalable", "desc": "Rest assured with enterprise-grade security and a platform that grows with your needs." }
        ]}
      />
      <PricingSection
        plans={[
          { "name": "Basic", "price": "Free", "features": ["Up to 5 users", "Basic features", "Email support"], "cta": "Start for Free" },
          { "name": "Pro", "price": "$29", "features": ["Unlimited users", "Advanced features", "Priority support", "Custom integrations"], "cta": "Get Pro" },
          { "name": "Enterprise", "price": "Custom", "features": ["All Pro features", "Dedicated account manager", "On-premise deployment", "24/7 Premium support"], "cta": "Contact Us" }
        ]}
      />
      <FAQSection
        items={[
          { "q": "What is your pricing model?h", "a": "We offer a free tier for small teams, and flexible subscription plans for growing businesses. Enterprise solutions are available upon request." },
          { "q": "Do you offer a free trial?", "a": "Yes, you can start with our free tier to experience the core features of our platform without any commitment." },
          { "q": "How secure is my data?", "a": "Your data security is our top priority. We employ industry-standard encryption, regular audits, and strict access controls to protect your information." }
        ]}
      />
    </div>
  
  </>
);
}
export default App;