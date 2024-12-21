import React from "react";


const ComparisonTable = () => {
  const features = [
    { feature: "Personalized Advice", basic: true, premium: true },
    { feature: "Dedicated Advisor", basic: false, premium: true },
    { feature: "Tax Optimization", basic: false, premium: true },
    { feature: "Portfolio Management", basic: true, premium: true },
    { feature: "Priority Support", basic: false, premium: true },
  ];

  return (
    <div className="comparison-section py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Compare Our Plans</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Features</th>
              <th className="p-4">Basic</th>
              <th className="p-4">Premium</th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-gray-800">{item.feature}</td>
                <td className="p-4 text-center">{item.basic ? "✔️" : "❌"}</td>
                <td className="p-4 text-center">{item.premium ? "✔️" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
