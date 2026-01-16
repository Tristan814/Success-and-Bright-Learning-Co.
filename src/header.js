import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "./assets/SABLCO_logo.png";
import "./mainpage.css";

function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

  return (
    <header className={`header ${hidden ? "hidden" : ""}`}>
      
      {/* LOGO → ALWAYS GOES TO MAIN PAGE */}
      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="Success & Bright Learning Logo"
          className="logo-image"
        />
        <div className="logo-text">Success & Bright Learning</div>
      </Link>

      {/* NAVIGATION */}
      {/* <nav className="nav">
        <a href="/#about">About Us</a>
        <a href="/#services">Services</a>
        <a href="/#training">Training Course</a>
        <a href="/#events">Events</a>
        <a href="/#testimonials">Testimonials</a>
        <Link to="/contact">Contact Us</Link>
      </nav> */}
      <nav className="nav">
  <Link to="/" onClick={() => scrollToSection("about")}>About Us</Link>
  <Link to="/" onClick={() => scrollToSection("services")}>Services</Link>
  <Link to="/" onClick={() => scrollToSection("training")}>Training Course</Link>
  <Link to="/" onClick={() => scrollToSection("events")}>Events</Link>
  <Link to="/" onClick={() => scrollToSection("testimonials")}>Testimonials</Link>
  <Link to="/contact">Contact Us</Link>
</nav>


    </header>
  );
}

export default Header;
