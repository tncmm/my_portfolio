import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  // Project data
  const projects = [
    {
      id: 1,
      title: t("ProjectList.AIChatWithVideo.title"),
      shortDescription: t("ProjectList.AIChatWithVideo.shortDescription"),
      details: t("ProjectList.AIChatWithVideo.details"),
      image: '/bg-dark.png',
    },
    {
      id: 2,
      title: t("ProjectList.KiEye.title"),
      shortDescription: t("ProjectList.KiEye.shortDescription"),
      details: t("ProjectList.KiEye.details"),
      image: '/bg-dark.png',
    },
    {
      id: 3,
      title: t("ProjectList.SmartHome.title"),
      shortDescription: t("ProjectList.SmartHome.shortDescription"),
      details: t("ProjectList.SmartHome.details"),
      image: '/bg-dark.png',
    },
    {
      id: 4,
      title: t("ProjectList.WeedRemover.title"),
      shortDescription: t("ProjectList.WeedRemover.shortDescription"),
      details: t("ProjectList.WeedRemover.details"),
      image: '/bg-dark.png',
    },
  ];

  // State to track the selected project
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
          {selectedProject.details.split('\n').map((line, index) => (
            <p key={index} className={styles.detailsLine}>{line.trim()}</p>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
