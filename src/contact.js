  import React, { useState } from 'react';
  import './contact.css'
  import facebook from './assets/facebook-icon.png';
  import gmail from './assets/gmail.png';
  import youtube from './assets/youtube-icon.png';

  import Header from "./header";
  import Footer from "./footer";

  import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

  const Contact = () => {
    const [formData, setFormData] = useState({
      companyName: '',
      organizationDetails: '',
      name: '',
      designation: '',
      mobileNumber: '',
      email: '',
      serviceType: '',
      message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const location = useLocation();

    useEffect(() => {

  const passedService = location.state?.selectedValue || location.state?.serviceType;
  
  if (passedService) {
    setFormData(prev => ({
      ...prev,
      serviceType: passedService 
    }));
  }
}, [location]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus(null);

      // Validation
      if (!formData.companyName || !formData.organizationDetails || !formData.name || 
          !formData.designation || !formData.mobileNumber || !formData.email || !formData.serviceType) {
        setStatus({ ok: false, text: 'Please fill in all required fields.' });
        return;
      }

      setLoading(true);
      try {
        const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });


        const data = await res.json();

        if (data.success) {
          setStatus({ ok: true, text: "Request sent successfully! We'll get back to you within 24 hours." });
          setFormData({
            companyName: '',
            organizationDetails: '',
            name: '',
            designation: '',
            mobileNumber: '',
            email: '',
            serviceType: '',
            message: ''
          });
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
      <div className="contact-page">
        {/* Header */}

        <Header />


        {/* Hero Section */}
        <section className="cq-hero">
          <div className="cq-hero-content">
            <h1>Get a Quotation Now!</h1>
            <p>
              Speak with our consultants and receive a tailored training or service proposal
              within 24 hours.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="cq-main-container">
          <div className="cq-content-wrapper">
            
            {/* Contact Information Card */}
            <div className="cq-info-card">
              <h2>Contact Information</h2>
              <p className="cq-subtitle">Reach out to us through any of the following channels</p>
              
              <div className="cq-info-items">
                <div className="cq-info-item">
                  <div className="cq-info-icon">📍</div>
                  <div className="cq-info-text">
                    <strong>Address</strong>
                    <p>452 Cabildo St, Intramuros, Manila, 1014 Metro Manila, Philippines</p>
                  </div>
                </div>

                <div className="cq-info-item">
                  <div className="cq-info-icon">
                    <img src={gmail} alt="Email" className="cq-icon-img" />
                  </div>
                  <div className="cq-info-text">
                    <strong>Email</strong>
                    <p>success.bright2020@gmail.com</p>
                  </div>
                </div>

                <div className="cq-info-item">
                  <div className="cq-info-icon">📞</div>
                  <div className="cq-info-text">
                    <strong>Phone</strong>
                    <p>+639236652058</p>
                  </div>
                </div>

                <div className="cq-info-item">
                  <div className="cq-info-icon">⏰</div>
                  <div className="cq-info-text">
                    <strong>Business Hours</strong>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="cq-social-links">
                <div style={{fontWeight: 'bold'}}>Social Media Links:</div>
                <a
                    href="https://www.facebook.com/successandbrightlearning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="Facebook" />
                    <span>Facebook</span>
                  </a>

                  <a href="mailto:success.bright2020@gmail.com">
                    <img src={gmail} alt="Email" className="social-icon-email" />
                    <span>Email</span>
                  </a>

                  <a
                    href="https://www.youtube.com/@SuccessBrightLearning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={youtube} alt="YouTube" />
                    <span>YouTube</span>
                  </a>
              </div>
            </div>

            {/* Quote Form */}
            <div className="cq-form-card">
              <h2>Request A Quote</h2>
              <p className="cq-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>

              <div className="cq-form">
                <div className="cq-form-group">
                  <label htmlFor="companyName">
                    Your Company / Organization <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your company or organization name"
                  />
                </div>

                <div className="cq-form-group">
                  <label htmlFor="organizationDetails">
                    We'd like to know more about your organization <span className="required">*</span>
                  </label>
                  <textarea
                    id="organizationDetails"
                    name="organizationDetails"
                    value={formData.organizationDetails}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your organization, industry, size, etc."
                  />
                </div>

                <div className="cq-form-row">
                  <div className="cq-form-group">
                    <label htmlFor="name">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="cq-form-group">
                    <label htmlFor="designation">
                      Designation / Position <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder="Your job title"
                    />
                  </div>
                </div>

                <div className="cq-form-row">
                  <div className="cq-form-group">
                    <label htmlFor="mobileNumber">
                      Mobile Number <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>

                  <div className="cq-form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="cq-form-group">
                  <label htmlFor="serviceType">
                    Service/Training Type <span className="required">*</span>
                  </label>
 <select
  id="serviceType"
  name="serviceType"
  value={formData.serviceType}
  onChange={handleChange}
>
  <option value="">Select a service...</option>

  {/* Services */}
  <option value="IT Consulting">IT Consulting</option>
  <option value="Financial Advice/Literacy">Financial Advice / Literacy</option>
  <option value="Network Security">Network Security</option>
  <option value="Data Analytics">Data Analytics</option>
  <option value="Software Development">Software Development</option>
  <option value="IT Strategy Consulting">IT Strategy Consulting</option>
  <option value="Open Training Calendar">Open Training Calendar</option>
  <option value="In-Company Training">In-Company Training</option>

  {/* Trainings */}
  <option value="Computer Basics 101">Computer Basics 101</option>
  <option value="Graphics Design">Graphics Design</option>
  <option value="Web Design & Development">Web Design & Development</option>
  <option value="CAD 2D Drawings & 3D Modelling">
    CAD 2D Drawings & 3D Modelling
  </option>
  <option value=".Net Programming">.Net Programming</option>
  <option value="Financial Planning & Management">
    Financial Planning & Management
  </option>

  <option value="Other">Other</option>
</select>

                </div>

                <div className="cq-form-group">
                  <label htmlFor="message">
                    Additional Information / Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us more about your training needs, preferred schedule, number of participants, etc."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="cq-submit-btn"
                >
                  {loading ? 'Sending Request...' : 'Submit Request'}
                </button>

                {status && (
                  <div className={`cq-status-message ${status.ok ? 'success' : 'error'}`}>
                    {status.text}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>


              <Footer />
      </div>
    );
  };

  export default Contact;