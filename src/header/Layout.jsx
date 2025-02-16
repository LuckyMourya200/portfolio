import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import SocialMediaIcons from './SocialMediaIcons';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffffff'
    }}>
      <Navbar style={{ flexGrow: 0, height: '54px' }} />
      <Header style={{ flexGrow: 1, height: 'auto' }} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0,
        height: 'auto',
        padding: '20px'
      }}>
        <SocialMediaIcons style={{ width: '205px', height: '32.48px' }} />
      </div>
    </div>
  );
};

export default Layout;

