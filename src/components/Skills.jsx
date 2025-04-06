import React from 'react';
import {
  FaReact, FaPhp, FaGitAlt, FaDocker,
  FaNodeJs, FaHtml5, FaCss3Alt
} from 'react-icons/fa';
import {
  SiMysql, SiRubyonrails, SiJavascript, SiFigma
} from 'react-icons/si';

const skills = [
    {
      name: 'React.js',
      icon: <FaReact style={{ color: '#61DBFB' }} />,
      description: 'JavaScript library for building interactive UIs'
    },
    {
      name: 'JavaScript (ES6+)',
      icon: <SiJavascript style={{ color: '#F0DB4F' }} />,
      description: 'Core language for web development with modern features'
    },
    {
      name: 'PHP',
      icon: <FaPhp style={{ color: '#8892BF' }} />,
      description: 'Backend scripting language used for dynamic web content'
    },
    {
      name: 'Ruby on Rails',
      icon: <SiRubyonrails style={{ color: '#CC0000' }} />,
      description: 'Server-side web application framework in Ruby'
    },
    {
      name: 'HTML5',
      icon: <FaHtml5 style={{ color: '#e34c26' }} />,
      description: 'Markup language for structuring web content'
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt style={{ color: '#264de4' }} />,
      description: 'Styling language used to design and layout web pages'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs style={{ color: '#3C873A' }} />,
      description: 'JavaScript runtime for building server-side applications'
    },
    {
      name: 'MySQL',
      icon: <SiMysql style={{ color: '#00758F' }} />,
      description: 'Relational database management system'
    }
  ];
  
  const tools = [
    {
      name: 'Git & GitHub',
      icon: <FaGitAlt style={{ color: '#F1502F' }} />,
      description: 'Version control and code collaboration platform'
    },
    {
      name: 'Docker',
      icon: <FaDocker style={{ color: '#0db7ed' }} />,
      description: 'Tool for containerizing and deploying applications'
    },
    {
      name: 'Figma',
      icon: <SiFigma style={{ color: '#A259FF' }} />,
      description: 'Collaborative interface design and prototyping tool'
    },
    {
      name: 'VSCode',
      icon: <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VSCode" />,
      description: 'Popular lightweight code editor from Microsoft'
    },
    {
      name: 'REST APIs',
      icon: <img src="https://img.icons8.com/color/48/api-settings.png" alt="API" />,
      description: 'Standard protocol for building web-based services'
    },
    {
      name: 'Linux',
      icon: <img src="https://img.icons8.com/color/48/linux.png" alt="Linux" />,
      description: 'Open-source operating system widely used for development'
    }
  ];
  

const Skills = () => (
  <section id="skills">
    <h2 className="section-title">Technical Skills</h2>

    <h3>Languages & Frameworks</h3>
    <div className="card-grid">
  {skills.map((item, idx) => (
    <div className="skill-card" key={idx}>
      {item.icon}
      <span style={{ fontWeight: 'bold', marginTop: '8px' }}>{item.name}</span>
      <p style={{ fontSize: '0.9rem', marginTop: '4px', color: '#ccc' }}>{item.description}</p>
    </div>
  ))}
</div>


    <h3 style={{ marginTop: '40px' }}>Tools & Technologies</h3>
    <div className="card-grid">
  {tools.map((item, idx) => (
    <div className="skill-card" key={idx}>
      {item.icon}
      <span style={{ fontWeight: 'bold', marginTop: '8px' }}>{item.name}</span>
      <p style={{ fontSize: '0.9rem', marginTop: '4px', color: '#ccc' }}>{item.description}</p>
    </div>
  ))}
</div>

  </section>
);

export default Skills;
