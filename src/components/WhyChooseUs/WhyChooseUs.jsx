import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const points = [
    { title: "Save Time", description: "Let us handle the heavy lifting so you can focus on what matters most." },
    {
      title: "Get Expert Advice",
      description: "Our advisors provide tailored recommendations based on your unique needs.",
    },
    {
      title: "Achieve Your Goals",
      description: "We’ll help you define and reach your financial objectives with ease.",
    },
  ];

  return (
    <div className="why-choose-us-section py-20 bg-gradient-to-r from-green-100 to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">
          Choosing the right financial service can make all the difference. Here's how we help you succeed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 relative overflow-hidden"
            >
              <div className="icon-wrapper absolute -top-4 -left-4 w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full shadow-lg">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
