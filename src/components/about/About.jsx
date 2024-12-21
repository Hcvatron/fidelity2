import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-section py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Image */}
        <div className="image-container flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHx0ZWFtfGVufDB8fHx8MTY3MDgxNTQzNw&ixlib=rb-1.2.1&q=80&w=800"
            alt="About Us Illustration"
            className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section: Content */}
        <div className="text-container text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-4">
            We are a team dedicated to empowering individuals and businesses by connecting them with expert financial advisors. Our mission is to help you achieve your goals through tailored, personalized solutions.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            From planning for retirement to managing investments, our tools and resources are designed to help you succeed and secure your future.
          </p>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
