import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <div className="cta-section bg-gradient-to-r from-blue-600 to-green-500 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Secure Your Financial Future?</h2>
        <p className="text-lg mb-6">Contact us today and get personalized financial advice tailored to your goals.</p>
        <a
          href="/"
          className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default CTA;
