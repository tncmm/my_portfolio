import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change language dynamically
  };

  return (
    <div className={styles.languageSwitcher}>
      <button onClick={() => changeLanguage('en')} className={styles.button}>
        English
      </button>
      <button onClick={() => changeLanguage('tr')} className={styles.button}>
        Türkçe
      </button>
    </div>
  );
};

export default LanguageSwitcher;
