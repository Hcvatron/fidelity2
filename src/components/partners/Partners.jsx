import React from "react";
import "./Partners.css";
import bloomberg from "../../assets/img/bloomberg.png";
import fa from "../../assets/img/fa.png";
import forbes from "../../assets/img/Forbes.png";
import fox from "../../assets/img/fox.png";

const Partners = () => {
  const logos = [
    { name: "Bloomberg", logo: bloomberg },
    { name: "Forbes", logo: forbes },
    { name: "Fox News", logo: fox },
    { name: "Financial Advisor Magazine", logo: fa },
  ];

  return (
    <div className="partners-section bg-gradient-to-r from-green-100 via-blue-50 to-green-100 py-14">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
          Trusted By Top Industry Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {logos.map((partner, index) => (
            <div
              key={index}
              className="partner-card hover:scale-105 transition-transform duration-300 flex justify-center items-center"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
