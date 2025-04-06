import React from 'react';

const resources = [
  {
    title: 'React Docs',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    summary: 'Official React documentation for building user interfaces.',
    link: 'https://react.dev/',
  },
  {
    title: 'Docker',
    image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
    summary: 'Containerize and deploy apps easily with Docker.',
    link: 'https://docs.docker.com/',
  },
];

const Resources = () => (
  <section id="resources">
    <h2>Resources</h2>
    {resources.map((res, idx) => (
      <div key={idx} className="card">
        <img src={res.image} alt={res.title} width="50" />
        <h3>{res.title}</h3>
        <p>{res.summary}</p>
        <a href={res.link}>Read More</a>
      </div>
    ))}
  </section>
);

export default Resources;
