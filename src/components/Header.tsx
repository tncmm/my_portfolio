import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePhoto from '../assets/images/profile.jpg';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Trans, useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/my-cv.pdf'; // Path to the CV file
    link.download = 'mustafa-tunc-cv.pdf'; // File name for download
    link.click();
  };

  return (
    <header className={styles.header}>

      <div className='container'>
        <div className={styles.profile}>
          <img src={profilePhoto} className={styles.profileImage} />
          <div className={styles.socialIcons}>
            <a href="https://github.com/tncmm" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-tun%C3%A7-497533201/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
          </div>
          <h1>
            <div className={styles.name}>
              <p>
                Mustafa Tunç
              </p>
            </div>
          </h1>
          <h1>
            <Trans
              i18nKey="developing"
              components={{
                highlight: <span className={styles.highlight} />,
              }}
            />
          </h1>
          <div className={styles.description}>
            <p>
              {t("I am a software engineer passionate about creating software. I have a strong background in image processing, frontend development and backend development which helps me in my career. I have worked on various projects that have given me a lot of different experiences about mobile, backend and frontend. In my job, I have enjoyed working with teams and sharing knowledge with others. My goal is to keep learning and to use my skills to make good software that people like to use.")}
            </p>
          </div>
          <div className={styles.actionButtons}>

            <button onClick={handleDownloadCV}>{t("Download CV")}</button>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
