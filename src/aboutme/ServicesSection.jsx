import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div style={{
      width: '330px',
      height: '346px',
      backgroundColor: '#f3f3f3',
      borderRadius: '14px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 15px',
      boxSizing: 'border-box',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img 
        src={icon} 
        alt={title} 
        style={{
          width: '70px',
          height: '70px',
          marginTop: '20px',
          objectFit: 'contain'
        }}
      />
      <h3 style={{
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: 600,
        letterSpacing: '0.96px',
        color: '#000000',
        margin: '20px 0 10px 0',
        textAlign: 'center'
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'Poppins',
        fontSize: '19px',
        fontWeight: 400,
        letterSpacing: '0.57px',
        color: '#000000',
        textAlign: 'center',
        margin: 0,
        lineHeight: '1.5'
      }}>
        {description}
      </p>
    </div>
  );
};

const ServicesSection = ({ services = [
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-4.png',
    title: 'UI/UX',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-3.png',
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon-2.png',
    title: 'App Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z7Idfo9nxTWt8i_A/icon.png',
    title: 'Graphic Design',
    description: 'Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh'
  }
] }) => {
  return (
    <div style={{
      width: '100%',
      minHeight: '584px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        fontFamily: 'Poppins',
        fontSize: '65px',
        fontWeight: 600,
        letterSpacing: '1.95px',
        color: '#000000',
        margin: 0,
        textAlign: 'center'
      }}>
        Services
      </h1>
      <p style={{
        fontFamily: 'Poppins',
        fontSize: '21px',
        fontWeight: 400,
        letterSpacing: '0.63px',
        color: '#000000',
        textAlign: 'center',
        maxWidth: '932px',
        margin: '15px 0 40px 0'
      }}>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
      </p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

