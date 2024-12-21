import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-section bg-gray-800 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto text-sm text-center">
        <p>
          <strong>Disclaimer:</strong> The information provided on this website is for
          informational purposes only and does not constitute financial, legal, or
          investment advice. Always consult with a qualified professional for
          personalized guidance. We are not liable for any decisions made based on the
          information provided here.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
