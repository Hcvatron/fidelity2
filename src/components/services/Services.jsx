import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "Estate Planning", description: "Secure your estate for future generations." },
    { title: "Retirement Planning", description: "Plan a worry-free retirement lifestyle." },
    { title: "Financial Planning", description: "Build a comprehensive financial roadmap." },
    { title: "Tax Planning", description: "Optimize your taxes and increase savings." },
    { title: "Investment Management", description: "Grow your wealth with expert strategies." },
    { title: "Business Ownership", description: "Navigate the complexities of business finances." },
  ];

  return (
    <div className="services-section py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Our Services</h2>
        <p className="text-lg text-center mb-12 text-gray-600">
          Explore our range of personalized financial solutions designed to meet your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card relative bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="icon-wrapper flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.732 5 12 5c4.268 0 8.268 2.943 9.542 7H2.458z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mt-4 ml-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 ml-4">{service.description}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-10 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
