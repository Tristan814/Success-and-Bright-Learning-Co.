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
import event1 from "./assets/event1.jpg";
import event2 from "./assets/event2.jpg";
import testi1 from "./assets/testi1.jpg";
import testi2 from "./assets/testi2.jpg";
import testi3 from "./assets/testi3.jpg";
import { useState, useEffect } from "react";


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
        <a href="#training">Training Course</a>
        <a href="#events">Events</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

const eventSlides = [
  { id: 1, image: event1 },
  { id: 2, image: event2 },

];


const MainPage = () => {

const [isPastMode, setIsPastMode] = useState(true);


const [currentPast, setCurrentPast] = useState(0);
const pastEvents = [
  { title: "JavaScript Bootcamp 2024", text: "A hands-on workshop teaching JavaScript fundamentals." },
  { title: "Robotics Training Day", text: "Students learned basic robotics and automation." },
  { title: "Math Competition 2023", text: "A school-wide math competition with exciting prizes." }
];


const [currentUpcoming, setCurrentUpcoming] = useState(0);
const upcomingEvents = [
  { title: "Science Fair 2026", text: "Present your innovative science experiments and win awards." },
  { title: "Web Design Workshop", text: "Learn how to design modern responsive websites." },
  { title: "STEM Robotics Expo", text: "A full-day expo showcasing the latest in robotics." }
];


  const [currentEvent, setCurrentEvent] = useState(0);


  const nextEvent = () => setCurrentEvent((p) => (p + 1) % eventSlides.length);
  const prevEvent = () => setCurrentEvent((p) => (p - 1 + eventSlides.length) % eventSlides.length);
  useEffect(() => {
    const t = setInterval(nextEvent, 5000);
    return () => clearInterval(t);

  }, []); 

const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { ok: boolean, text: string }

const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus(null); 


    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ ok: false, text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    try {

      const res = await fetch("http://localhost:4002/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ ok: true, text: "Message sent successfully!" });
 
        setName("");
        setEmail("");
        setMessage("");
      } else {

        setStatus({ ok: false, text: data.error || "Something went wrong." });
      }
    } catch (err) {

      setStatus({ ok: false, text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div id="frontp" className="main-page">

        <Header />

      <div className="frontp">
        <h1>Welcome to Success & Bright Learning</h1>
        <p>Tools To Help You Succeed</p>
        <p>Offering In-Depth Training For Your Team</p>

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

          
        </div>
      </div>

    <img src={internship} alt="internship" className="internship-image" />

      {/* Services Section */}
      <div id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
         
            <img src={ITConsult} alt="Image" className="image-service" />
            <h3>IT Consulting</h3>
            <p>We analyze your business needs and help you make strategic decisions on the 
                fast and successful implementation of business-critical solutions.</p>
          </div>
          <div className="service-card">
       
            <img src={Financial} alt="Image" className="image-service" />
            <h3>Financial Advice/Literacy</h3>
            <p>We provide scalable and cost-effective cloud solutions for businesses of all sizes. Our team of experts can help you 
                migrate your applications and data to the cloud, ensuring maximum performance and security.</p>
          </div>
          <div className="service-card">

            <img src={NetworkSec} alt="Image" className="image-service" />
            <h3>Network Security</h3>
            <p>Our network security services help protect your business from cyber attacks and data breaches. We can provide comprehensive 
                security assessments, implement firewalls, and establish secure remote access protocols.</p>
          </div>
          <div className="service-card">
      
            <img src={DataAnalytics} alt="Image" className="image-service" />
            <h3>Data Analytics</h3>
            <p>We help businesses harness the power of data to gain insights and make informed decisions. Our team can help you 
                collect, analyze, and visualize your data to uncover trends, patterns, and opportunities.</p>
          </div>
            <div className="service-card">

            <img src={SoftwareDev} alt="Image" className="image-service" />
            <h3>Software Development</h3>
            <p>We offer custom software development services to help you build scalable and reliable applications. 
                Our team can work with you to design, develop, test, and deploy software solutions tailored to your specific needs.</p>
          </div>
          <div className="service-card">

            <img src={ITStrategy} alt="Image" className="image-service" />
            <h3>IT Strategy Consulting</h3>
            <p>Our IT strategy consulting services help you align your technology investments with your business goals. We can help you 
                develop a roadmap for digital transformation, optimize your IT operations, and identify new opportunities.</p>
          </div>
          <div className="service-card">

            <img src={OpenCalendar} alt="Image" className="image-service" />
            <h3>Open Training Calendar</h3>
            <p>This is an online classroom theoretical and hands-on training which is available year-round at your convenience.</p>
          </div>
          <div className="service-card">

            <img src={InCompanyT} alt="Image" className="image-service" />
            <h3>In-Company Training</h3>
            <p>Select any theoretical and hands-on training from our extensive training portfolio to be organized at a 
                location of your choice. For more information or enquiries, please contact success.brigh2020@gmail.com.</p>
          </div>
        </div>
      </div>

{/* TRAINING */}
<div id="training" className="training">
  <h2>Our Training Courses</h2>
  
  <div className="training-grid landscape">

    <div className="training-card landscape-card">
      
      <div className="training-info">
        <div className="icon-row">
            <div className="service-icon">💻</div>
            <h3>Computer Basics 101</h3>
        </div>
        
        <p>This learning session is part of our initiative to educate everyone - little or no knowledge at all - in learning the basic computer operations. The course include the basics of computer operations, 
            Cloud Computing and Office Suite (i.e. Documents, Spreadsheets, Presentations & Databases).</p>
      </div>
    </div>


    <div className="training-card landscape-card">
      <div className="training-info">
         <div className="icon-row">
            <div className="service-icon">🎨</div>
            <h3>Graphics Design</h3>
        </div>
        
        <p>This learning session provides the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. It focuses on the logic of 
            displaying elements in interactive designs to optimize the user experience.</p>
      </div>
    </div>


    <div className="training-card landscape-card">
      <div className="training-info">
        <div className="icon-row">
            <div className="service-icon">🌐</div>
            <h3>Web Design & Development</h3>
        </div>
        <p>This learning session provides the process of creating websites which is front end design. It encompasses several different aspects,
             including webpage layout, content production, and graphic design using the different technology and CMS.</p>
      </div>
    </div>


    <div className="training-card landscape-card">
      <div className="training-info">
                <div className="icon-row">
            <div className="service-icon">📐</div>
        <h3>CAD 2D Drawings & 3D Modelling</h3>
        </div>
        <p>This learning session provides the use of computers to create two-dimensional layout design and three-dimensional modeling. It will equip educators, students, engineers 
            and professionals on how to utilize CAD software for 2D & 3D drawing.</p>
      </div>
    </div>


    <div className="training-card landscape-card">
      <div className="training-info">
        <div className="icon-row">
            <div className="service-icon">🧑‍💻</div>
        <h3>.Net Programming</h3>
        </div>
        <p>This learning session provides a framework that provides a programming guidelines that can be used to develop a wide range of application from web to mobile to 
            Windows-based applications. The .NET framework can work with several programming languages such as C#, VB.NET, C++ and F#.</p>
      </div>
    </div>


    <div className="training-card landscape-card">
      <div className="training-info">
        <div className="icon-row">
            <div className="service-icon">📊</div>
        <h3>Financial Planning & Management</h3>
        </div>
        <p>This learning session is a vital activity in any organization. It is the process of planning, organizing, controlling and monitoring financial resources 
            with a view to achieve organizational goals and objectives.</p>
      </div>
    </div>
  </div>
</div>


     

{/* EVENTS SECTION */}
<div id="events" className="events">
  <h2>Past and Upcoming Events</h2>

  <div className="events-content">

    <div className="left-events">
      <div className="image-wrapper">

        <button
          className="slider-icon-arrow arrow-left"
          onClick={prevEvent}
        >
          ‹
        </button>

        <img
          src={eventSlides[currentEvent].image}
          alt={`Event ${currentEvent + 1}`}
          className="event-image"
        />

        <button
          className="slider-icon-arrow arrow-right"
          onClick={nextEvent}
        >
          ›
        </button>

      </div>
    </div>

   
    <div className="right-box">

      <h3 className="right-title">
        {isPastMode ? "Past Events" : "Upcoming Events"}
      </h3>

      <div className="event-textbox">

        <h4 className="event-title">
          {isPastMode 
            ? pastEvents[currentPast].title
            : upcomingEvents[currentUpcoming].title}
        </h4>

        <p className="event-desc">
          {isPastMode 
            ? pastEvents[currentPast].text
            : upcomingEvents[currentUpcoming].text}
        </p>

        
      </div>


      <div className="events-list-wrapper">

        <div className="events-list-mini">
          {(isPastMode ? pastEvents : upcomingEvents).map((ev, idx) => (
            <button
              key={idx}
              className={
                "events-list-item " +
                (
                  isPastMode 
                    ? (idx === currentPast ? "selected" : "") 
                    : (idx === currentUpcoming ? "selected" : "")
                )
              }
              onClick={() => {
                if (isPastMode) setCurrentPast(idx);
                else setCurrentUpcoming(idx);
              }}
            >
              <div className="mini-title">{ev.title}</div>
            </button>
          ))}
        </div>

        <button 
          className="switch-mode-btn"
          onClick={() => setIsPastMode(!isPastMode)}
        >
          {isPastMode ? "View Upcoming Events →" : "← View Past Events"}
        </button>

      </div>

    </div>
  </div>
</div>

{/* TESTIMONIALS */}
<div id="testimonials" className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-content">
        <div className="image1">
             <img src={testi1} alt="Image" className="testiimage" />
          </div>
        <div className="image2">
            <img src={testi2} alt="Image" className="testiimage" />
          </div>
            
        </div>
        <img src={testi3} alt="Image" className="testiimage2" />
      </div>

{/* CONTACT US */}
<div id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          {/* Contact Information */}
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
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows={6}
            required
          />

          <button type="submit" disabled={loading} className="send-btn">
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Message */}
          {status && (
            <p
              role="status"
              style={{
                color: status.ok ? 'green' : 'red',
                marginTop: '8px',
                fontWeight: 'bold',
              }}
            >
              {status.text}
            </p>
          )}
        </form>
      </div>
    </div>
    
{/* FOOTER */}
      <footer className="footer">   
        <div className="footer-text">
        <div className="set-to-row">
        <h1>Success & Bright Learning Co.</h1>
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
