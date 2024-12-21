import React from 'react';

const Contact = () => (
  <div className="contact-section py-20 px-10">
    <h2 className="text-3xl font-bold">Contact Us</h2>
    <form className="mt-6">
      <input className="block w-full p-3 mb-4 border rounded" type="text" placeholder="Your Name" />
      <input className="block w-full p-3 mb-4 border rounded" type="email" placeholder="Your Email" />
      <textarea className="block w-full p-3 mb-4 border rounded" placeholder="Your Message"></textarea>
      <button className="px-6 py-3 bg-blue-600 text-white rounded">Submit</button>
    </form>
  </div>
);

export default Contact;
