import { Link } from "react-router-dom";
import logo from "./assets/SABLCO_logo.png";
import facebook from "./assets/facebook-icon.png";
import gmail from "./assets/gmail.png";
import youtube from "./assets/youtube-icon.png";
import "./mainpage.css";

function Footer() {
  // Function to smooth scroll to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
        // If on a different page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand & Bio */}
        <div className="footer-section brand-info">
          {/* Logo is now clickable and scrolls to top */}
          <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src={logo} alt="SABLCO Logo" className="footer-logo-xl" />
          </Link>
          <h2 className="footer-title">Success & Bright Learning Co.</h2>
          <p className="footer-description">
            We offer professional trainings, webinars, and tutorials. 
            We understand your needs and cater the kind of learning that satisfies your goals.
          </p>
        </div>

        {/* Column 2: Quick Links (Updated to match your Nav) */}
        <div className="footer-section">
          <h3 className="section-title">Quick Links</h3>
          <nav className="footer-nav-links">
            <Link to="/" onClick={() => scrollToSection("about")}>About Us</Link>
            <Link to="/" onClick={() => scrollToSection("services")}>Services</Link>
            <Link to="/" onClick={() => scrollToSection("training")}>Training Course</Link>
            <Link to="/" onClick={() => scrollToSection("events")}>Events</Link>
            <Link to="/" onClick={() => scrollToSection("testimonials")}>Testimonials</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
        </div>

        {/* Column 3: Contact Us */}
        <div className="footer-section">
          <h3 className="section-title">Get In Touch</h3>
          <div className="contact-details">
            <p><strong>Address:</strong> 452 Cabildo St, Intramuros, Manila, 1014 Metro Manila, Philippines</p>
            <p><strong>Phone:</strong> +63 923 665 2058</p>
            <p><strong>Email:</strong> success.bright2020@gmail.com</p>
          </div>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/successandbrightlearning/#" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="social-img-colored" />
            </a>
            <a href="https://www.youtube.com/@SuccessBrightLearning" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube" className="social-img-colored" />
            </a>
            <a href="mailto:success.bright2020@gmail.com">
              <img src={gmail} alt="Gmail" className="social-img-colored-email" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2020 Success & Bright Learning Co. | Registration No.: 2007091</p>
      </div>
    </footer>
  );
}

export default Footer;