import React, { useState } from 'react';

const ContactUsSection = ({ style = {} }) => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Handle contact form submission
    console.log('Submitted email:', email);
  };

  const buttonStyles = {
    backgroundColor: isHovered ? '#e66400' : '#fd6f00',
    color: '#ffffff',
    border: 'none',
    borderRadius: '14px',
    padding: '20px 36px',
    fontSize: '24px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    letterSpacing: '0.72px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    height: '75px',
    width: '222px'
  };

  return (
    <div style={{
      ...style,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minWidth: '300px',
      maxWidth: '932px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '48px'
      }}>
        <h1 style={{
          fontSize: '65px',
          fontFamily: 'Poppins',
          fontWeight: 600,
          letterSpacing: '1.95px',
          color: '#000000',
          margin: '0 0 15px 0',
          textAlign: 'center',
          width: '100%',
          maxWidth: '724px'
        }}>
          Lets Design Together
        </h1>
        <p style={{
          fontSize: '21px',
          fontFamily: 'Poppins',
          fontWeight: 400,
          letterSpacing: '0.63px',
          color: '#000000',
          textAlign: 'center',
          margin: 0,
          width: '100%',
          maxWidth: '932px'
        }}>
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
        </p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        width: '100%',
        maxWidth: '874px'
      }}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={handleEmailChange}
          style={{
            width: '100%',
            maxWidth: '627px',
            height: '75px',
            backgroundColor: '#f8f8f8',
            border: '1px solid #afafaf',
            borderRadius: '14px',
            padding: '0 26px',
            fontSize: '21px',
            fontFamily: 'Poppins',
            color: '#797979',
            outline: 'none',
            boxSizing: 'border-box'
          }}
        />
        <button
          onClick={handleSubmit}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={buttonStyles}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ContactUsSection;

