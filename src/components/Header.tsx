import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePhoto from '../assets/images/profile.jpg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const { t } = useTranslation();

  return (
    <header className={styles.header}>
        
        <div className='container'>
        <div className={styles.profile}>
          <img src={profilePhoto} className={styles.profileImage} />
          <div className={styles.socialIcons}>
          <a href="https://github.com/tncmm" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>

          <a href="https://www.linkedin.com/in/mustafa-tun%C3%A7-497533201/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          </div>
          <h1>
            I am developing <span className={styles.highlight}>mobile</span> and{' '}
            <span className={styles.highlight}>web applications</span>!
          </h1>
          <div className={styles.description}>
          <p>
          {t("I am a software engineer passionate about creating software. I have a strong background in image processing, frontend development and backend development which helps me in my career. I have worked on various projects that have given me a lot of different experiences about mobile, backend and frontend. In my job, I have enjoyed working with teams and sharing knowledge with others. My goal is to keep learning and to use my skills to make good software that people like to use.")}
          </p>
          </div>
          <div className={styles.actionButtons}>
            <button>{t("Contact Me")}</button>
            <button>{t("Download CV")}</button>
          </div>
        </div>
        </div>
      
    </header>
  );
};

export default Header;
