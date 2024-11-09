import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Experience.module.css';
import { useTranslation } from 'react-i18next';

const Experience: React.FC = () => {
    const { t } = useTranslation();
  
    const experiences = [
      {
        role: "Full Stack Developer",
        company: 'Mobileriz - '+t("Full-time")+t("Remote"),
        location: 'Izmir, '+t("Turkey"),
        duration: t("July")+' 2024 - '+t("October")+' 2024',
        description:t("Currently working on an e-commerce integration project, where I am responsible for designing the UI and developing mobile applications for both iOS and Android, and developing backend to ensure seamless integration and functionality across the platform."),
        usedTech: "Python · Flask · FastAPI · PostgreSQL · Flutter · Riverpod · MVC+S · Push Notification · REST API · Supabase · Docker · Kafka · SQLAlchemy · Flink · Debezium · Hexagonal Architecture · Figma",
      },
      {
        role: "Mobile Application Developer",
        company: 'Voco - '+t("Full-time")+t("Remote"),
        location: ''+t("Turkey"),
        duration: t("September")+' 2023 - '+t("Februray")+' 2024',
        description:t("Worked on Voco which is a location based social media application that is similar to Tinder and Bumble. It allows users to create activities in a specific location where other users can search and participate in that activity. I worked on developing mobile applications both for iOS and Android. My main responsibilities were, developing the UI designs, creating profile, sending requests and sharing functionalities within the app."),
        usedTech: 'Flutter · Riverpod · MVC+S · Google Maps · Push Notification · WebSocket · REST API · Freezed',
      },
      {
        role: "Software Developer",
        company: 'Ant Arge -'+t("Full-time") +t("Hybrid"),
        location: t("Turkey"),
        duration: t("February")+' 2022 - '+t("September")+' 2023',
        description:t("Worked on ANTLY which is a courier delivery application based on a new generation flexible working model. A mobile application where you can earn additional income by accepting order requests from businesses in the region where you want to work.. The project is supported by TUBITAK. I created the whole mobile app including its publishing to the App Store, Google Play Store and Huawei App Gallery. Developed CAK, a mobile marketplace app designed to reduce food waste by offering discounted products nearing their best-before date. The project is supported by KOSGEB and TUBITAK. I created the whole mobile app including its publishing to the App Store, Google Play Store and Huawei App Gallery."),
        usedTech: "Flutter · Provider · MVC · Google Maps · Push Notifications · Firebase · WebSocket · Iyzico (Payment Gateway)"},
      {
        role: "Web Developer",
        company: 'Labotecha - '+t("Full-time")+t("Remote"),
        location: 'Nigde, '+t("Turkey"),
        duration: t("September")+' 2020 - '+t("April")+' 2021',
        description:t("Worked on a project to list and share the deals on different products. I developed a form-based website."),
        usedTech: "PHP · MySQL · HTML · CSS · JavaScript"
      },
    ];

  return (
    <section className={styles.experience}>
      <h2>{t("Experiences")}</h2>
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
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {exp.location}
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

export default Experience;
