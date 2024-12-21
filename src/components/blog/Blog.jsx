import React from "react";
import "./Blog.css";

const Blog = () => {
  const articles = [
    { title: "5 Tips for Smart Investing", summary: "Learn the top strategies to grow your wealth.", link: "/blog/smart-investing" },
    { title: "Understanding Tax Planning", summary: "Discover how to save money with effective tax planning.", link: "/blog/tax-planning" },
    { title: "How to Retire Early", summary: "Key steps to achieve financial independence.", link: "/blog/retire-early" },
  ];

  return (
    <div className="blog-section py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="article-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
              <p className="text-gray-600 mt-2">{article.summary}</p>
              <a
                href={article.link}
                className="text-blue-600 font-semibold mt-4 inline-block hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
