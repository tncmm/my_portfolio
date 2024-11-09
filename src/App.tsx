import React from 'react';
import './styles/global.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import BackgroundImage from './assets/images/bg.jpg';
import LanguageSwitcher from './components/LanguageSwitcher';
import EducationAndVolunteering from './components/EducationAndVolunteering';


const App: React.FC = () => {
  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      color: 'white',
    }}>
      <LanguageSwitcher />
      <Header />
      <Projects />
      <Experience />
      <EducationAndVolunteering />
    </div>
  );
};

export default App;
