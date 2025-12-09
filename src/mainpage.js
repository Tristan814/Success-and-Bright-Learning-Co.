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
import gmail from "./assets/gmail.png";
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

  const [selectedService, setSelectedService] = useState(null);
  const [selectedTraining, setSelectedTraining] = useState(null);

    // Services data
  const services = [
    {
      id: 1,
      image: ITConsult,
      title: 'IT Consulting',
      shortDesc: 'We analyze your business needs and help you make strategic decisions on the fast and successful implementation of business-critical solutions.',
      fullDesc: 'Our IT consulting services provide comprehensive analysis of your business needs and technology infrastructure. We help you make strategic decisions for successful implementation of business-critical solutions. Our expert consultants work closely with your team to identify opportunities, optimize processes, and ensure seamless technology integration.',
      features: [
        'Business Process Analysis',
        'Technology Assessment',
        'Strategic Planning',
        'Implementation Support',
        'Ongoing Consultation'
      ]
    },
    {
      id: 2,
      image: Financial,
      title: 'Financial Advice/Literacy',
      shortDesc: 'We provide scalable and cost-effective cloud solutions for businesses of all sizes. Our team of experts can help you migrate your applications and data to the cloud.',
      fullDesc: 'Empower your financial future with our comprehensive financial literacy programs. We provide expert guidance on budgeting, investing, retirement planning, and wealth management. Our services are designed to help individuals and businesses make informed financial decisions.',
      features: [
        'Personal Financial Planning',
        'Investment Strategies',
        'Retirement Planning',
        'Tax Optimization',
        'Wealth Management'
      ]
    },
    {
      id: 3,
      image: NetworkSec,
      title: 'Network Security',
      shortDesc: 'Our network security services help protect your business from cyber attacks and data breaches. We can provide comprehensive security assessments.',
      fullDesc: 'Protect your business with our advanced network security solutions. We implement comprehensive security measures including firewalls, intrusion detection systems, and secure remote access protocols. Our team conducts regular security audits to ensure your network remains protected against evolving threats.',
      features: [
        'Security Assessments',
        'Firewall Implementation',
        'Intrusion Detection',
        'Secure Remote Access',
        'Vulnerability Testing'
      ]
    },
    {
      id: 4,
      image: DataAnalytics,
      title: 'Data Analytics',
      shortDesc: 'We help businesses harness the power of data to gain insights and make informed decisions. Our team can help you collect, analyze, and visualize your data.',
      fullDesc: 'Transform your raw data into actionable insights with our data analytics services. We help you collect, process, analyze, and visualize data to uncover trends, patterns, and opportunities. Our analytics solutions enable data-driven decision making across your organization.',
      features: [
        'Data Collection & Processing',
        'Statistical Analysis',
        'Predictive Modeling',
        'Data Visualization',
        'Business Intelligence Reports'
      ]
    },
    {
      id: 5,
      image: SoftwareDev,
      title: 'Software Development',
      shortDesc: 'We offer custom software development services to help you build scalable and reliable applications. Our team can work with you to design, develop, test, and deploy.',
      fullDesc: 'Build powerful, scalable applications with our custom software development services. From initial concept to deployment and maintenance, we deliver tailored solutions that meet your specific business requirements. Our agile development approach ensures quality and timely delivery.',
      features: [
        'Custom Application Development',
        'Web & Mobile Apps',
        'System Integration',
        'Quality Assurance',
        'Maintenance & Support'
      ]
    },
    {
      id: 6,
      image: ITStrategy,
      title: 'IT Strategy Consulting',
      shortDesc: 'Our IT strategy consulting services help you align your technology investments with your business goals. We can help you develop a roadmap for digital transformation.',
      fullDesc: 'Align your technology with business objectives through our IT strategy consulting. We develop comprehensive roadmaps for digital transformation, optimize IT operations, and identify new opportunities for growth. Our strategic approach ensures maximum ROI on technology investments.',
      features: [
        'Digital Transformation',
        'IT Roadmap Development',
        'Technology Optimization',
        'Change Management',
        'Innovation Strategy'
      ]
    },
    {
      id: 7,
      image: OpenCalendar,
      title: 'Open Training Calendar',
      shortDesc: 'This is an online classroom theoretical and hands-on training which is available year-round at your convenience.',
      fullDesc: 'Access our comprehensive training programs year-round with our Open Training Calendar. Participate in online classroom sessions that combine theoretical knowledge with hands-on practice. Learn at your own pace with flexible scheduling options.',
      features: [
        'Online Classroom Training',
        'Flexible Scheduling',
        'Hands-on Labs',
        'Expert Instructors',
        'Certificate of Completion'
      ]
    },
    {
      id: 8,
      image: InCompanyT,
      title: 'In-Company Training',
      shortDesc: 'Select any theoretical and hands-on training from our extensive training portfolio to be organized at a location of your choice.',
      fullDesc: 'Bring expert training directly to your organization with our In-Company Training programs. We customize our extensive training portfolio to meet your specific needs and deliver it at your preferred location. Perfect for team development and skill building.',
      features: [
        'Customized Curriculum',
        'On-site Delivery',
        'Team Training',
        'Flexible Duration',
        'Post-training Support'
      ]
    }
  ];

  // Training courses data
  const trainings = [
    {
      id: 1,
      icon: '💻',
      title: 'Computer Basics 101',
      shortDesc: 'This learning session is part of our initiative to educate everyone - little or no knowledge at all - in learning the basic computer operations.',
      fullDesc: 'Perfect for beginners! This comprehensive course covers fundamental computer operations, cloud computing basics, and essential office suite applications. Learn to navigate operating systems, manage files, and use productivity tools effectively.',
      duration: '4 weeks',
      level: 'Beginner',
      topics: [
        'Computer Hardware & Software',
        'Operating System Basics',
        'File Management',
        'Cloud Computing Fundamentals',
        'Office Suite (Documents, Spreadsheets, Presentations)'
      ]
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Graphics Design',
      shortDesc: 'This learning session provides the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration.',
      fullDesc: 'Master the art of visual communication! Learn professional graphic design principles, typography, color theory, and industry-standard design tools. Create stunning visuals for print and digital media.',
      duration: '6 weeks',
      level: 'Intermediate',
      topics: [
        'Design Principles & Theory',
        'Typography & Color Theory',
        'Adobe Creative Suite',
        'Logo & Brand Design',
        'UI/UX Design Basics'
      ]
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Web Design & Development',
      shortDesc: 'This learning session provides the process of creating websites which is front end design. It encompasses webpage layout, content production, and graphic design.',
      fullDesc: 'Build professional websites from scratch! Learn HTML, CSS, JavaScript, and modern web development frameworks. Master responsive design, user experience principles, and content management systems.',
      duration: '8 weeks',
      level: 'Intermediate',
      topics: [
        'HTML5 & CSS3',
        'JavaScript & jQuery',
        'Responsive Web Design',
        'Content Management Systems',
        'Web Performance Optimization'
      ]
    },
    {
      id: 4,
      icon: '📐',
      title: 'CAD 2D Drawings & 3D Modelling',
      shortDesc: 'This learning session provides the use of computers to create two-dimensional layout design and three-dimensional modeling.',
      fullDesc: 'Master computer-aided design! Learn professional CAD software for creating precise 2D technical drawings and realistic 3D models. Essential for engineers, architects, and design professionals.',
      duration: '6 weeks',
      level: 'Intermediate',
      topics: [
        'CAD Software Basics',
        '2D Technical Drawing',
        '3D Modeling Techniques',
        'Rendering & Visualization',
        'Project-based Learning'
      ]
    },
    {
      id: 5,
      icon: '🧑‍💻',
      title: '.Net Programming',
      shortDesc: 'This learning session provides a framework that provides a programming guidelines that can be used to develop a wide range of application from web to mobile.',
      fullDesc: 'Become a .NET developer! Learn C#, ASP.NET, and the .NET framework to build powerful applications for web, mobile, and desktop platforms. Hands-on projects included.',
      duration: '10 weeks',
      level: 'Advanced',
      topics: [
        'C# Programming',
        'ASP.NET Core',
        'Entity Framework',
        'Web API Development',
        'Database Integration'
      ]
    },
    {
      id: 6,
      icon: '📊',
      title: 'Financial Planning & Management',
      shortDesc: 'This learning session is a vital activity in any organization. It is the process of planning, organizing, controlling and monitoring financial resources.',
      fullDesc: 'Master financial management! Learn to plan, organize, control, and monitor financial resources effectively. Essential skills for business owners, managers, and financial professionals.',
      duration: '5 weeks',
      level: 'Intermediate',
      topics: [
        'Financial Planning Fundamentals',
        'Budgeting & Forecasting',
        'Financial Analysis',
        'Risk Management',
        'Investment Strategies'
      ]
    }
  ];
  return (
    <div id="frontp" className="main-page">

        <Header />

      {/* <div   style={{ backgroundImage: `url(${logo})` }} className="frontp">
        <h1>Welcome to Success & Bright Learning</h1>
        <p>Tools To Help You Succeed</p>
        <p>Offering In-Depth Training For Your Team</p>

      </div> */}
      <div className="frontp">
  <div className="logo-bg"></div>
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
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-card"
              onClick={() => setSelectedService(service)}
            >
              <img src={service.image} alt={service.title} className="image-service" />
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <button className="learn-more-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>

      {/* Training Section */}
      <div id="training" className="training">
        <h2>Our Training Courses</h2>
        <div className="training-grid landscape">
          {trainings.map((training) => (
            <div 
              key={training.id}
              className="training-card landscape-card"
              onClick={() => setSelectedTraining(training)}
            >
              <div className="training-info">
                <div className="icon-row">
                  <div className="service-icon">{training.icon}</div>
                  <h3>{training.title}</h3>
                </div>
                <p>{training.shortDesc}</p>
                <button className="learn-more-btn">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedService(null)}>×</button>
            
            <div className="modal-header">
              <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
              <h2>{selectedService.title}</h2>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.fullDesc}</p>
              
              <div className="features-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                  {selectedService.features.map((feature, index) => (
                    <li key={index}> {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <div className="service-row">
                <p className="contact-info">
                 
                <img className="gmail-service" src={gmail} alt="Facebook" />
                Contact us at: <a href="mailto:edwin.cordenete@gmail.com">edwin.cordenete@gmail.com</a>
                </p>
                </div>
                <button className="primary-btn">Request Quote</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Training Modal */}
      {selectedTraining && (
        <div className="modal-overlay" onClick={() => setSelectedTraining(null)}>
          <div className="modal-content training-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedTraining(null)}>×</button>
            
            <div className="modal-header training-header">
              <div className="training-icon-large">{selectedTraining.icon}</div>
              <h2>{selectedTraining.title}</h2>
              <div className="training-meta">
                <span className="badge">⏱️ {selectedTraining.duration}</span>
                <span className="badge level">{selectedTraining.level}</span>
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedTraining.fullDesc}</p>
              
              <div className="topics-section">
                <h3>Course Topics</h3>
                <ul className="topics-list">
                  {selectedTraining.topics.map((topic, index) => (
                    <li key={index}>
                      <span className="topic-number">{index + 1}</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">

                <button className="primary-btn">Enroll Now</button>
                {/* <p className="contact-info">
                  📧 For enrollment: <a href="mailto:edwin.cordenete@gmail.com">edwin.cordenete@gmail.com</a>
                </p> */}
                
                              <div className="training-row">
                  <a href="https://www.facebook.com/successandbrightlearning/#" target="_blank" rel="noopener noreferrer">
                <div className="modal-icon">
                <img src={facebook} alt="Facebook" />
                </div>
            </a>
            
            <a href="mailto:edwin.cordenete@gmail.com" target="_blank" rel="noopener noreferrer">
                <div>
                <img className="gmail-training" src={gmail} alt="Facebook" />
                </div>
            </a>

                {/* <a href="mailto:edwin.cordenete@gmail.com" target="_blank" rel="noopener noreferrer">
                <div >
                <img className="gmail-icon" src={gmail} alt="Facebook" />
                </div></a> */}
            
            <a href="https://www.youtube.com/@SuccessBrightLearning" target="_blank" rel="noopener noreferrer">
                <div className="modal-icon">
                <img src={youtube} alt="YouTube" />
                </div>
            </a>
            </div>

                
{/* 
                <div className="training-row">
                  <a href="https://www.facebook.com/successandbrightlearning/#" target="_blank" rel="noopener noreferrer">
                <div className="modal-icon">
                <img src={facebook} alt="Facebook" />
                </div>
            </a>
            <a href="mailto:edwin.cordenete@gmail.com" target="_blank" rel="noopener noreferrer">
                <div className="modal-icon">
                <img src={facebook} alt="Facebook" />
                </div>
            </a>
            
            <a href="https://www.youtube.com/@SuccessBrightLearning" target="_blank" rel="noopener noreferrer">
                <div className="modal-icon">
                <img src={youtube} alt="YouTube" />
                </div>
            </a>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      )}


     

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
            <strong><img src={gmail} alt="Logo" className="gmail-logo" /> Email:</strong>
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

                        <a href="mailto:edwin.cordenete@gmail.com" target="_blank" rel="noopener noreferrer">
                <div >
                <img className="gmail-icon" src={gmail} alt="Facebook" />
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
