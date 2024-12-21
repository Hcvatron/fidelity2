import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Disclaimer from "../components/disclaimer/Disclaimer";

// Scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


const MainContent = ({ children }) => {
  const location = useLocation();

  
  const isAdjustedRoute = ["/services", "/about", "/contact"].includes(location.pathname);


  const style = isAdjustedRoute
    ? { minHeight: "100vh", display: "flex", flexDirection: "column", margin:"2rem" }
    : {};

  return <div style={style}>{children}</div>;
};

const Container = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <MainContent>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/disclaimer" element={<Disclaimer />} />
          {/* <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default Container;
