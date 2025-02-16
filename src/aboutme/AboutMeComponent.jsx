import React from 'react';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';

const AboutMeComponent = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '100%',
        maxWidth: '1412px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <AboutSection />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        width: '100%',
        maxWidth: '1413px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ServicesSection />
      </div>
    </div>
  );
};

export default AboutMeComponent;

