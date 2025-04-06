import React, { useState } from 'react';
import './BasicInfo.css';

const BasicInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="hero-section">
      <h1 className="intro-text" onClick={() => setShowInfo(true)}>
        👋 Hi, I'm Pranav Sharma
      </h1>

      {showInfo && (
        <div className="info-card animate-pop">
            <p>Full Stack Developer in training @ Red River College.</p>
            <p>I love building dynamic websites with React, Docker, and modern tools.</p>
            <p>Passionate about clean code, responsive design, and solving real-world problems with technology.</p>
            <p>Currently exploring API development, CI/CD pipelines, and scalable web app architectures.</p>
            <p>Team player, quick learner, and always excited to take on new challenges in tech.</p>

        </div>
      )}
    </section>
  );
};

export default BasicInfo;
