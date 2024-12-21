import React, { useState, useEffect } from "react";
import "./Hero.css";
import Partners from "../partners/Partners";
import About from "../about/About";
import Services from "../services/Services";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import HowItWorks from "../HowItWorks/HowItWorks";
import Disclaimer from "../disclaimer/Disclaimer";
import CTA from "../CTA/CTA";
import Blog from "../blog/Blog";
import ComparisonTable from "../ComparisonTable/ComparisonTable";

const Hero = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="hero-section p-10 relative overflow-hidden">
        <div className="hero-sectionmain max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-10 relative z-10">
          {/* Left Section */}
          <div className="text-content space-y-6 md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Your <span className="highlight">Wealth</span>, Your Future, <span className="highlight">Your Way</span>
            </h1>
            <p className="text-lg text-gray-700">
              Our innovative strategies and expert advice empower you to achieve your financial dreams.
            </p>
            <form className="space-y-4">
              <label className="block text-sm font-semibold">
                Choose your financial improvement timeline:
              </label>
              <select className="block w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-green-500">
                <option>As soon as possible</option>
                <option>Within the next 3-6 months</option>
                <option>Within the next year</option>
                <option>No specific timeframe</option>
              </select>
              <button className="px-8 py-3 bg-green-600 text-white font-bold rounded-md shadow-md hover:bg-green-700 transition duration-300">
                <a href="/">Get Started</a>
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="image-content md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1&q=80&w=800"
              alt="Financial Planning"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-10 -right-10 bg-green-500 w-48 h-48 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-green-300 to-transparent z-0"></div>
        <div className="absolute -bottom-16 -left-16 bg-green-600 w-64 h-64 rounded-full opacity-10"></div>
        <div className="absolute -top-16 -right-16 bg-green-400 w-40 h-40 rounded-full opacity-10"></div>
      </div>
      <Partners />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Blog />
      <ComparisonTable />
      <About />
      <CTA />
      <Disclaimer />

      {showScroll && (
        <button
          className="scroll-to-top fixed bottom-5 right-5 p-4 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition-transform duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Hero;
