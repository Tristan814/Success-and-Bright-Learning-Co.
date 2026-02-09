
import './mainpage.css'
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
import event2 from "./assets/event2.jpg";
import event3 from "./assets/event3.jpg";
import event4 from "./assets/event4.png";
import event5 from "./assets/event5.jpg";
import event6 from "./assets/event6.jpg";
import event7 from "./assets/event7.jpeg";
import event8 from "./assets/event8.jpg";
import event9 from "./assets/event9.PNG";
import event10 from "./assets/event10.PNG";
import event11 from "./assets/event11.PNG";
import event12 from "./assets/event12.PNG";
import event13 from "./assets/event13.PNG";
import event14 from "./assets/event14.PNG";
import event15 from "./assets/event15.PNG";
import event16 from "./assets/event16.PNG";
import gmail from "./assets/gmail.png";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Testimonials from "./assets/TESTIMONIALS_1.png";
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

import Header from "./header";
import Footer from "./footer";

const eventSlides = [
  { id: 2, image: event2 },
  { id: 3, image: event3 },
  { id: 4, image: event4 },
  { id: 5, image: event5 },
  { id: 6, image: event6 },
  { id: 7, image: event7 },
  { id: 8, image: event8 },
  { id: 9, image: event9 },
  { id: 10, image: event10 },
  { id: 11, image: event11 },
  { id: 12, image: event12 }, 
  { id: 13, image: event13 },
  { id: 14, image: event14 },
  { id: 15, image: event15 },
  { id: 16, image: event16 },
];


const MainPage = () => {

const [isPastMode, setIsPastMode] = useState(true);



const [currentPast, setCurrentPast] = useState(0);
const pastEvents = [
  { title: "CAD 2D Training Workshop", text: "(For Beginners, Intermediate and Advanced Levels)" },
  { title: "CAD 3D Modelling Training Workshop", text: "(For Beginners, Intermediate and Advanced Levels)" },
  { title: "Computer Basics 101", text: "(An essential training-workship for all levels)" },
    { title: "Financial Planning Webinar", text: "(An essential Financial Management Literacy during Uncertain Times)" },
  { title: "Java 8 to Java 14", text: "(Selected Language Features and the Technology Path for Anspiring Java Developer)" },
    { title: "Web Design & Development", text: "(An essential training-workshop for all levels)" },
  { title: "CAD 2D & 3D Drawing Overview", text: "(For Beginners, Intermediate and Advanced Levels)" },
    { title: "Living Healthy & Happy", text: "(An Essential Nutritional Immunology Webinar During Uncertain Times)" },
  { title: "Introduction to Python and Setup 1", text: "(Reskill ONLIVE Learning Courses)" },

    { title: "Exploring SQL and the Setup Essentials", text: "(Reskill ONLIVE Learning Courses)" },
    { title: "Panimula sa Pag-Manage ng IT Projects", text: "(Reskill ONLIVE Learning Courses) - Tagalog Course" },
  { title: "Introduction to AutoCAD 2D", text: "(Reskill ONLIVE Learning Courses)" },
    { title: "Exploring C#. Net Programming with MySQL Integration", text: "(Reskill ONLIVE Learning Courses)" },
  { title: "Introduction to AutoCAD 3D Modeling", text: "(Reskill ONLIVE Learning Courses)" },
  { title: "Mastering the Fundamentals of Java Programming", text: "(Reskill ONLIVE Learning Courses)" },
        { title: "Financial Planning & Canva (Basic Design)", text: "(Free Financial Planning of Sunlife)" }
];


const [currentUpcoming, setCurrentUpcoming] = useState(0);
const upcomingEvents = [

];
const hasUpcomingEvents = upcomingEvents.length > 0;
const hasPastEvents = pastEvents.length > 0;


  const [currentEvent, setCurrentEvent] = useState(0);


  const nextEvent = () => setCurrentEvent((p) => (p + 1) % eventSlides.length);
  const prevEvent = () => setCurrentEvent((p) => (p - 1 + eventSlides.length) % eventSlides.length);
  useEffect(() => {
    const t = setInterval(nextEvent, 5000);
    return () => clearInterval(t);

  }, []); 


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


<section className="hero">
    <motion.div
    className="hero-content"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <span className="hero-badge">Trusted Learning & IT Partner</span>

    <h1>
      Welcome to <span>Success & Bright Learning</span>!
    </h1>

    <p>
      Success & Bright Learning Co. delivers corporate training,
      IT consulting, and professional development programs
      designed to build real-world skills and long-term success.
    </p>

    <div className="hero-buttons">
      <Link
        to="/contact"
        state={{ serviceType: "consulting" }}
        className="btn-primary"
      >
        Request a Proposal
      </Link>

      <a href="#services" className="btn-outline">
        View Services
      </a>
    </div>
   </motion.div>


  <motion.div
    className="hero-image"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <img src={internship} alt="Corporate Learning" />
  </motion.div>
</section>


                    
      <div id="about" className="about">
        <h2>About Us</h2>
        
        <div className="about-content">
            <div><img src={aboutIMG} alt="Image" className="aboutIMG" /></div>
          <div className="about-text">
            <p>
             The SUCCESS & BRIGHT LEARNING CO., is an IT consulting firm in the Philippines that specializes in IT Solutions and Services. 
             with principal office address at 452 Cabildo St. Intramuros, Manila, represented herein by Edwin S. Cordenete hereinafter referred to as "Single Proprietorship Company".
            </p>
            <p>
             Success & Bright Learning Co. was founded in May 2020 with the vision of educating everyone to learn the beauty of life in all aspects of knowledge—i.e., spiritual, health & wellness, financial, and technological perspectives.

The learnings from various webinars conducted will provide a holistic approach to becoming well-rounded individuals who can live joyfully and successfully every day.

            </p>
          </div>

          
        </div>
      </div>


      {/* Services Section */}
      <div id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <motion.div
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedService(service)}
            >
              <img src={service.image} alt={service.title} className="image-service" />
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
              <button className="learn-more-btn"
                >Learn More →</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Training Section */}
      <div id="training" className="training">
        <h2>Our Training Courses</h2>
        <div className="training-grid landscape">
          {trainings.map((training) => (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            className="modal-content service-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
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
                 
            
                Contact us at: <a href="mailto:success.bright2020@gmail.com">success.bright2020@gmail.com</a>
                </p>
                </div>
                {/* <button className="primary-btn">Request Quote</button> */}
                <Link 
                    to="/contact" 
                    state={{ selectedValue: selectedService.title }} // Passing the title here
                    className="primary-btn"
                  >
                    Request Quote
                  </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Training Modal */}
      {selectedTraining && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTraining(null)}
        >
          <motion.div
            className="modal-content training-modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            
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
                <div className="service-row">
                <p className="contact-info">
                
                Contact us at: <a href="mailto:success.bright2020@gmail.com">success.bright2020@gmail.com</a>
                </p>
                </div>

                <Link 
                    to="/contact" 
                    state={{ selectedValue: selectedTraining.title }} // Passing the title here
                    className="primary-btn"
                  >
                    Request Quote
                  </Link>
              </div>
            </div>
                        <button className="close-btn" onClick={() => setSelectedTraining(null)}>×</button>
          </motion.div>
        </motion.div>
      )}

{/* EVENTS SECTION */}
<div id="events" className="events">
  <h2 >Past & Upcoming Events</h2>

  <div className="events-container">

    {/* LEFT — IMAGE SLIDER */}
    <div className="events-left">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1.2}        
        centeredSlides={true}    
        spaceBetween={20}
        className="events-swiper"
      >
        {eventSlides.map((ev, index) => (
          <SwiperSlide key={index}>
            <div className="slide-inner">
              <img
                src={ev.image}
                alt={ev.title || `Event ${index + 1}`}
                className="event-slide-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* RIGHT — EVENTS LIST */}
   <div className="events-right">

<motion.div
  className="events-card"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <span className="events-badge">
    {isPastMode ? "Past Events" : "Upcoming Events"}
  </span>

  {/* MAIN CONTENT */}
  {isPastMode ? (
    hasPastEvents ? (
      <>
        <h3 className="event-main-title">
          {pastEvents[currentPast].title}
        </h3>

        <p className="event-main-desc">
          {pastEvents[currentPast].text}
        </p>
      </>
    ) : (
      <p className="event-empty">
        No past events yet.
      </p>
    )
  ) : (
    hasUpcomingEvents ? (
      <>
        <h3 className="event-main-title">
          {upcomingEvents[currentUpcoming].title}
        </h3>

        <p className="event-main-desc">
          {upcomingEvents[currentUpcoming].text}
        </p>
      </>
    ) : (
      <p className="event-empty">
        No upcoming events yet. Stay tuned! 🚀
      </p>
    )
  )}

  {/* EVENT LIST */}
  {(isPastMode ? hasPastEvents : hasUpcomingEvents) && (
    <div className="events-list">
      {(isPastMode ? pastEvents : upcomingEvents).map((ev, idx) => {
        const isActive = isPastMode
          ? idx === currentPast
          : idx === currentUpcoming;

        return (
          <button
            key={ev.id}
            className={`event-item ${isActive ? "active" : ""}`}
            onClick={() =>
              isPastMode
                ? setCurrentPast(idx)
                : setCurrentUpcoming(idx)
            }
          >
            {ev.title}
          </button>
        );
      })}
    </div>
  )}

  {/* SWITCH BUTTON */}
  <button
    className="switch-mode-btn"
    onClick={() => setIsPastMode(!isPastMode)}
  >
    {isPastMode ? "View Upcoming Events →" : "← View Past Events"}
  </button>
</motion.div>


</div>

</div>
</div>

{/* TESTIMONIALS */}
<section id="testimonials" className="testimonials">
  <h2 className="testimonials-title">Testimonials</h2>
  <p className="testimonials-subtitle">
    What our learners say about Success & Bright Learning
  </p>

  <div className="testimonials-grid">



    {/* Card 3 */}
    <motion.div
        className="testimonial-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
      <div className="avatar">
       <img src={Testimonials} alt="Client" />
      </div>

      <div className="testimonial-box">
        <p className="testimonial-text">
            Natutunan ko po yung mga iba't ibang code
            about sa Microsoft Excel. Mahusay po halata po sa professional sya sa
            pagtuturo about computer. Yes po, mairerecommend ko po talaga ang
            course na yun sa mga friends ko dahil sa panahon
            nga po ngayon halos puro online na ang
            ginagamit sa ano mang bagay.
        </p>

        <h4 className="testimonial-name">Erickjohn Bautista de Arce</h4>
        <span className="testimonial-role">Grade 12 Student</span>
      </div>
    </motion.div>

  </div>
</section>



      <Footer />
    </div>
  );
};

export default MainPage;
