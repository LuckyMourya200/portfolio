import React from 'react';
import ProjectsSection from './ProjectsSection';
import ContactUsSection from './ContactUsSection';
import Footer from './Footer';

const ContactUsAndFooterComponent = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff' }}>
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ProjectsSection style={{ width: '100%', maxWidth: '932px', margin: '60px 0' }} />
        <ContactUsSection style={{ width: '100%', maxWidth: '932px', margin: '60px 0' }} />
      </div>
      <Footer style={{ width: '100%', maxWidth: '1925px', height: 'auto' }} />
    </div>
  );
};

export default ContactUsAndFooterComponent;

