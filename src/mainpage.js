import React from "react";
import './mainpage.css'
import logo from './assets/SABLCO_logo.png'
import internship from './assets/internship prog.webp'
import aboutIMG from './assets/aboutIMG.webp'
import DataAnalytics from "./assets/DataAnalytics.jpg";
import Financial from "./assets/Financial.jpg";
import ITConsult from "./assets/ITConsult.jpg";
import NetworkSec from "./assets/NetworkSec.jpg";
import SoftwareDev from "./assets/SoftwareDev.jpg";
import InCompanyT from "./assets/In-CompanyT.jpg";
import ITStrategy from "./assets/ITStrat.jpg";
import OpenCalendar from "./assets/Open-CalendarT.jpg";
import youtube from "./assets/youtube-icon.png";
import facebook from "./assets/facebook-icon.png";
import { useState, useEffect } from "react";

// const MainPage = () => {
//     return (
// <div className="container">
//     <header className="header">
//         <div className="logow">Success & Bright Learning</div>
//         <nav className="nav">
//             <a ></a>
//         </nav>
//         </header>


// </div>
//     )
// };
// export default MainPage; 

function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);   // hide header
      } else {
        setHidden(false);  // show header
      }

      setLastScroll(currentScroll);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header className={`header ${hidden ? "hidden" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="logo-text">Success & Bright Learning</div>
      </div>

      <nav className="nav">
        <a href="#frontp">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

const MainPage = () => {
  return (
    <div id="frontp" className="main-page">
      {/* <header className={`header ${hidden ? "hidden" : ""}`}>
  <div className="logo-container" >
    <img src={logo} alt="Logo" className="logo-image" />
    <div className="logo-text">Success & Bright Learning</div>
  </div>
        <nav className="nav">
          <a href="#frontp">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#events">Events</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </header> */}
      
        <Header />

      <div className="frontp">
        <h1>Welcome to Success & Bright Learning</h1>
        <p>Tools To Help You Succeed</p>
        <p>Offering In-Depth Training For Your Team</p>
        {/* <button className="cta-button">Get Started</button> */}
      </div>
                    
      <div id="about" className="about">
        <h2>About Us</h2>
        
        <div className="about-content">
            <div><img src={aboutIMG} alt="Image" className="aboutIMG" /></div>
          <div className="about-text">
            <p>
              Success & Bright Learning Co. was founded in May 2020 with the vision of educating everyone to learn the beauty of life in 
              all aspects of knowledge - i.e. spiritual, health & wellness, financial and technology perspective.
            </p>
            <p>
              The learnings from various webinars conducted will provide wholistic approach on becoming a well-rounded 
              individuals who can live joyfully and successfully everyday.
            </p>
          </div>
          {/* <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div> */}
          
        </div>
      </div>
    <img src={internship} alt="internship" className="internship-image" />
      {/* Services Section */}
      <div id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            {/* <div className="service-icon">💻</div> */}
            <img src={ITConsult} alt="Image" className="image-service" />
            <h3>IT Consulting</h3>
            <p>We analyze your business needs and help you make strategic decisions on the 
                fast and successful implementation of business-critical solutions.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">📱</div> */}
            <img src={Financial} alt="Image" className="image-service" />
            <h3>Financial Advice/Literacy</h3>
            <p>We provide scalable and cost-effective cloud solutions for businesses of all sizes. Our team of experts can help you 
                migrate your applications and data to the cloud, ensuring maximum performance and security.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">☁️</div> */}
            <img src={NetworkSec} alt="Image" className="image-service" />
            <h3>Network Security</h3>
            <p>Our network security services help protect your business from cyber attacks and data breaches. We can provide comprehensive 
                security assessments, implement firewalls, and establish secure remote access protocols.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">🔒</div> */}
            <img src={DataAnalytics} alt="Image" className="image-service" />
            <h3>Data Analytics</h3>
            <p>We help businesses harness the power of data to gain insights and make informed decisions. Our team can help you 
                collect, analyze, and visualize your data to uncover trends, patterns, and opportunities.</p>
          </div>
            <div className="service-card">
            {/* <div className="service-icon">☁️</div> */}
            <img src={SoftwareDev} alt="Image" className="image-service" />
            <h3>Software Development</h3>
            <p>We offer custom software development services to help you build scalable and reliable applications. 
                Our team can work with you to design, develop, test, and deploy software solutions tailored to your specific needs.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">🔒</div> */}
            <img src={ITStrategy} alt="Image" className="image-service" />
            <h3>IT Strategy Consulting</h3>
            <p>Our IT strategy consulting services help you align your technology investments with your business goals. We can help you 
                develop a roadmap for digital transformation, optimize your IT operations, and identify new opportunities.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">🔒</div> */}
            <img src={OpenCalendar} alt="Image" className="image-service" />
            <h3>Open Training Calendar</h3>
            <p>This is an online classroom theoretical and hands-on training which is available year-round at your convenience.</p>
          </div>
          <div className="service-card">
            {/* <div className="service-icon">🔒</div> */}
            <img src={InCompanyT} alt="Image" className="image-service" />
            <h3>In-Company Training</h3>
            <p>Select any theoretical and hands-on training from our extensive training portfolio to be organized at a 
                location of your choice. For more information or enquiries, please contact success.brigh2020@gmail.com.</p>
          </div>
        </div>
      </div>

<div id="events" className="events">
        <h2>Events</h2>
        <div className="about-content">
                      <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
          <div className="about-text">
            <p>
              TechCorp Solutions is a leading technology company specializing in 
              software development, cloud solutions, and digital transformation.
            </p>
            <p>
              Founded in 2015, we have been serving clients worldwide with 
              cutting-edge technology solutions and exceptional service.
            </p>
          </div>

        </div>
      </div>

<div id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="about-content">
                      <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Team Members</p>
            </div>
          </div>
          <div className="about-text">
            <p>
              TechCorp Solutions is a leading technology company specializing in 
              software development, cloud solutions, and digital transformation.
            </p>
            <p>
              Founded in 2015, we have been serving clients worldwide with 
              cutting-edge technology solutions and exceptional service.
            </p>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <strong>📍 Address:</strong>
              <p>452 Cabildo St. 452 Cabildo St, Intramuros, Manila, 1014 Metro Manila, Philippines</p>
            </div>
            <div className="info-item">
              <strong>📧 Email:</strong>
              <p>edwin.cordenete@gmail.com</p>
            </div>
            <div className="info-item">
              <strong>📞 Phone:</strong>
              <p>+639236652058</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-text">
        <div className="set-to-row">
        <h1>Success & Bright Learning</h1>
        <img src={logo} alt="Logo" className="logo-footer" />
            </div>
            <div className="set-to-margin-top">
            <p className="set-to-margin-bottom">We offer trainings, webinars and tutorials. We understand your needs and we will 
            cater the kind of learnings that will satisfy your needs. Do not hesitate to contact us.</p>
            <p>&copy; 2020 Success & Bright Learning Co. All rights reserved. | Registration No.: 2007091</p>
            <div className="set-to-row2">
            <a href="https://www.facebook.com/successandbrightlearning/#" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon">
                <img src={facebook} alt="Facebook" />
                </div>
            </a>
            
            <a href="https://www.youtube.com/@SuccessBrightLearning" target="_blank" rel="noopener noreferrer">
                <div className="footer-icon">
                <img src={youtube} alt="YouTube" />
                </div>
            </a>
            </div>
            </div>
        
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
