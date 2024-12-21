import React, { useState, useEffect } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
      <div className="logo">
        <span className="text-xl font-bold">
          Wealth<span className="highlight">Planner</span>
        </span>
      </div>

      <div className="center-text">
        Empower Your Financial Future
      </div>


      <a href="tel:+18337343733" className="call-button">
        <img
          width="28px"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9UlEQVR4nO1aXYhVVRTeZT9W+INKhJCRpUFSiUg+lJJPSVAUJlH0IBJREUhJROiLOPXig2AERZCWKIQvIUEG5UMZaIE91UBhkVijM9Ocs75v31NN2o7V7BvXwz333vGsPXcEP9gPd2bd9e1vr7PXXnud69xlXAgACwCsB7Cb5JckvwdwBsDfJAngFIBPAGwTkSVuukFEHgHwGYB/SIZeRrQ96L2/aToIWELyi14nXyHoNwCr+ybCe/+QPi51RLQMeu/v6YsIAONGIpqR+YvkIIA3ReSOqXqcrCJRJWocwGvJRIQQriB5NKUIXijo1SRCADw2VSI4IeQcgPvNhdTNUBc5vjIVURTFosmcE5aj0WisNBMC4Ll+iODE2GEmhOSefgkB8LmlkCTZCsB5kh93sTltKWQwgRBP8qkQwjUkf+ggZNxSyLBxJA7neb646V9ENnWwPWcmpE5JAuDPWM4f0Y1L8u6y/xDCtR0WC2ZCSI50mbAA+EBENorIKl1tEZmvE5wEx3sVvn8yEwLg2w4i9uR5Ps+A4/GKiB6xUTFBsr+C5EMrDpLLKhbqbWdIsqWCZJkVx9jY2JyKxXreMiL3tSE45YxBEmUe7/0KM4IQwoyRkZFZQ0NDN5DcEDf3fmcMACfKSUS5rXlaCR/Vst7aL8ntJSEfWU/6cIzCL6Ojo7P17yGEq50xSN6oZ07L4/u+leMX2+yNdNdQ51ye57eRfDf2w5RvfV2Ht8emQFnI2RDCdWV7km/E+un1br57sSW5OXIerSWE5Dsdyo4X2tiz15KiF1sRmR9tsrpCfu5wmp8sZxNd3TjBgR58d7UtiuLmyDVcSwiARqf6ynv/YC2C7vzPNCvllEJ+LIriFpcIeZ7P0wM3cj2dpFDUjnqWZXNdImRZdivJY5HveAjhyloOY2YpizgQQrjKJYL3fjmAorkPtXtT2ymAO9tE5CWXECQHmqW7vm8xcwzgm/LeSFn7APg6SSLRErpNVJ50CZDn+b3R/+/m5Y9eVVuyx//lu1bBCR6rQ9H/Tpcyn5fE7DPmWBNbsrme6C7V6wR9R9jmEXvZwr9W09pgiAu01aWEpkGSo6Wo6Apubmevub/XNA1gb/Q5GEK43qUGybUV/a23QggzW+we0OymxR6AXSKytMqniLwSF+UP0yttN2i5EPu1ZTHfqQAAz5bFauS0XhKRh1tPab3XxP9pZJ9wUw0R2di89Ex2APhUfTQajYXx83kV7/oF7/06vfpehJD/GtK6fzRD1b79WYDkXV3uLO2Gb36/tYndd2RZNld/ijGJiOxy0xkkN2iHpYMA3dS7U1bOZtD6KDaiDzV/FQTgV+0Pm77QvAx3aeBf0BQuvD8r6Z4AAAAASUVORK5CYII="
          alt="phone-icon"
        />
        Call Us +1 (833) 734-3733
      </a>
    </nav>
  );
};

export default Navbar;
