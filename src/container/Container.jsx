import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";


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
          <Route path="*" element={<Hero />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default Container;
