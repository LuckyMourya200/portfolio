import React from 'react';

const SocialMediaIcons = ({ style }) => {
  const icons = [
    { id: 'facebook', url: 'https://facebook.com', alt: 'Facebook' },
    { id: 'twitter', url: 'https://twitter.com', alt: 'Twitter' },
    { id: 'instagram', url: 'https://instagram.com', alt: 'Instagram' },
    { id: 'linkedin', url: 'https://linkedin.com', alt: 'LinkedIn' }
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '205px',
    height: '32.48px',
    ...style
  };

  const iconStyle = {
    width: '32.48px',
    height: '32.48px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const iconHoverStyle = {
    transform: 'scale(1.1)'
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.target.style, iconHoverStyle);
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'none';
  };

  return (
    <div style={containerStyle}>
      {icons.map((icon) => (
        <a
          key={icon.id}
          href={icon.url}
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={`https://dashboard.codeparrot.ai/api/image/Z7H_749nxTWt8i-q/social-m.png`}
            alt={icon.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </a>
      ))}
    </div>
  );
};

SocialMediaIcons.defaultProps = {
  style: {}
};

export default SocialMediaIcons;

