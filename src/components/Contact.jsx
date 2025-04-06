import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
  <section id="contact">
    <h2 className="section-title">Contact Me</h2>
    <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
      Feel free to connect with me via the platforms below:
    </p>

    <ul className="contact-grid">
      <li>
        <a
          href="https://github.com/PSharma2603"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#333", textDecoration: "none" }}
        >
          <FaGithub size={32} style={{ marginRight: "8px" }} />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1DA1F2", textDecoration: "none" }}
        >
          <FaTwitter size={32} style={{ marginRight: "8px" }} />
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0077B5", textDecoration: "none" }}
        >
          <FaLinkedin size={32} style={{ marginRight: "8px" }} />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:sharmapranav5788@gmail.com"
          style={{ color: "#EA4335", textDecoration: "none" }}
        >
          <FaEnvelope size={32} style={{ marginRight: "8px" }} />
          <span>Email</span>
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
