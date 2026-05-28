import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sachinrajputt17@gmail.com").then(() => {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    });
  };

  return (
    <section id="contact" className="container">
      <div className="contact_section glass-card" data-aos="zoom-in" data-aos-duration="1000">
        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Get In Touch
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '500px', marginInline: 'auto' }}>
          Have a project in mind or just want to say hi? Feel free to reach out to me via any of the platforms below!
        </p>

        <div className="social_links">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinrajputt17@gmail.com" target="_blank" rel="noreferrer" onClick={copyEmailToClipboard} className="social_item glass-card" style={{ color: '#ea4335' }}>
            <SiGmail />
          </a>
          <a href="https://www.linkedin.com/in/sachin-mewada-92b403249/" target="_blank" rel="noreferrer" className="social_item glass-card" style={{ color: '#0a66c2' }}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/sachinmewada" target="_blank" rel="noreferrer" className="social_item glass-card" style={{ color: '#fff' }}>
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_sachinmewada/?hl=en" target="_blank" rel="noreferrer" className="social_item glass-card" style={{ color: '#e4405f' }}>
            <FaInstagram />
          </a>
          <a href="https://www.instagram.com/_sachinmewada/?hl=en" target="_blank" rel="noreferrer" className="social_item glass-card" style={{ color: '#1877f2' }}>
            <FaFacebook />
          </a>
        </div>

        <div style={{ marginTop: '50px' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinrajputt17@gmail.com&su=Project+Inquiry" target="_blank" rel="noreferrer" onClick={copyEmailToClipboard} className="btn btn-primary">
            Send a Message
          </a>
        </div>
      </div>

      <div className={`toast-container ${showToast ? "show" : ""}`}>
        Email copied to clipboard! (sachinrajputt17@gmail.com)
      </div>
    </section>
  );
};

export default Contact;