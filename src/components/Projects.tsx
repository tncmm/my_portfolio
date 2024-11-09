import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import { useTranslation } from 'react-i18next';
const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'NFT Website',
      shortDescription: 'A modern NFT marketplace.',
      details:
        'This project is a full-stack NFT marketplace where users can buy, sell, and trade digital assets. Built with React, Node.js, and Ethereum blockchain.',
      image: '/bg-dark.png',
    },
    {
      id: 2,
      title: 'Movie App',
      shortDescription: 'A movie streaming platform.',
      details:
        'A responsive movie streaming application with search, filtering, and personalized recommendations. Built with React and Firebase.',
      image: '/bg-dark.png',
    },
    {
      id: 3,
      title: 'Movie App',
      shortDescription: 'A movie streaming platform.',
      details:
        'A responsive movie streaming application with search, filtering, and personalized recommendations. Built with React and Firebase.',
      image: '/bg-dark.png',
    },
    {
      id: 4,
      title: 'Movie App',
      shortDescription: 'A movie streaming platform.',
      details:
        'A responsive movie streaming application with search, filtering, and personalized recommendations. Built with React and Firebase.',
      image: '/bg-dark.png',
    },
  ];

  // Track the hovered card's details
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
 
  
  return (
    <section className={styles.projects}>
           <div className="container">
        <h2>{t("Projects")}</h2>
        <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.card}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.cardImage}
            />
            <h3>{project.title}</h3>
            <p className={styles.shortDescription}>{project.shortDescription}</p>
          </div>
        ))}
        </div>
      </div>

      {/* Independent Description Section */}
      {selectedProject && (
        <div className={styles.projectDetails}>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.details}</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
