import React from 'react';

const workData = [
  {
    title: 'My Rides',
    description: 'A PHP bike rental website with admin & booking functionality.',
    image: 'data:image/jpeg;base64,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',
    link: 'https://github.com/PSharma2603/My-Rides',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Electronics E-Commerece',
    description: 'Rails app using Electronics API, CSV import, filtering, and search and all the functionalities for checkout and invoices.',
    image: 'https://www.hqts.com/wp-content/uploads/2023/07/Blog-Image-1-1.png',
    link: 'https://github.com/PSharma2603/Intro_Project',
    tech: ['Ruby on Rails', 'API', 'ActiveRecord'],
  }
];

const Work = () => (
  <section id="work">
    <h2>Work</h2>
    {workData.map((item, idx) => (
      <div key={idx} className="card">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a href={item.link}>View Project</a>
        <ul>{item.tech.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
      </div>
    ))}
  </section>
);

export default Work;
