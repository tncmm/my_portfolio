import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Experience.module.css';
import { useTranslation } from 'react-i18next';

const EducationAndVolunteering: React.FC = () => {
    const { t } = useTranslation();
  
    const experiences = [
      {
        role: t("Computer Engineering (English)"),
        company: t("Alanya Alaaddin Keykubat University"),
        duration: '2018 - 2023',
        description:"Year of Graduation: 2023, GPA: 3,41/4.00",
        usedTech: "Awarded 4 high honor and 4 honor certificates.",
      },
      {
        role: t("Reporter"),
        company: 'Social Coding Club ALKU',
        duration: t("January")+' 2022 - '+t("September")+' 2022',
        description:"Lecturer, Python and C Programming Language Course",
        usedTech: '',
      },
      {
        role: t("Founding Member/Vice President"),
        company: '1907 UNIFEB ALKU',
        duration: t("October")+' 2020 - '+t("January")+' 2022',
      },
      {
        role: t("Young Volunteer"),
        company: t("Ministry of Youth and Sports"),
        duration: t("October")+' 2020 - '+t("March")+' 2023',
      },
      {
        role: t("Member"),
        company: t("Aksaray Photography Art Association"),
        duration: t("June")+' 2018 - Present',
      }
     
    ];

  return (
    <section className={styles.experience}>
      <h2>{t("Education & Volunteering")}
      </h2>
      <div className="container">
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{exp.role}</h3>
                <p>
                  <FontAwesomeIcon icon={faBuilding} /> {exp.company}
                </p>
                <p>
                  <FontAwesomeIcon icon={faCalendarAlt} /> {exp.duration}
                </p>
                
                <div style={{ borderTop: "2px solid white", margin: "20px 0" ,color:"white"}}></div>
                <p className={styles.description}>{exp.description}</p>
                <p className={styles.usedTech}>{exp.usedTech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAndVolunteering;
