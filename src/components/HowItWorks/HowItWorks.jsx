import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "Step 1: Tell Us About Yourself",
      description: "Complete a quick questionnaire to share your financial goals and current situation.",
    },
    {
      title: "Step 2: Get Matched",
      description: "We'll connect you with trusted financial advisors who are the best fit for you.",
    },
    {
      title: "Step 3: Start Planning",
      description: "Work together to build a personalized financial plan tailored to your needs.",
    },
  ];

  return (
    <div className="how-it-works-section py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">How It Works</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our seamless process ensures you get started quickly and effectively on your financial journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300"
            >
              <div className="step-number absolute -top-4 -left-4 w-14 h-14 flex items-center justify-center text-white bg-gradient-to-r from-blue-500 to-green-500 font-bold text-xl rounded-full shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
