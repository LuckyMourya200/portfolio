import React from 'react';

const ProjectsSection = ({ style = {} }) => {
  const categories = [
    { id: 1, name: 'All', selected: false },
    { id: 2, name: 'UI UX', selected: true },
    { id: 3, name: 'Website Design', selected: false },
    { id: 4, name: 'App Design', selected: false },
    { id: 5, name: 'Graphic Design', selected: false }
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '932px',
    minWidth: '320px',
    padding: '20px',
    boxSizing: 'border-box',
    ...style
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '65px',
    fontWeight: 600,
    letterSpacing: '1.95px',
    color: '#000000',
    textAlign: 'center',
    margin: '0',
    marginBottom: '20px'
  };

  const descriptionStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '21px',
    fontWeight: 400,
    letterSpacing: '0.63px',
    color: '#000000',
    textAlign: 'center',
    maxWidth: '932px',
    margin: '0',
    marginBottom: '40px'
  };

  const menuBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '11px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  const categoryStyle = (selected) => ({
    padding: '10px 16px 10px 15px',
    background: selected ? '#fd6f00' : '#f3f3f3',
    borderRadius: '8px',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    letterSpacing: '0.72px',
    color: selected ? '#ffffff' : '#000000',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    border: 'none',
    ':hover': {
      background: selected ? '#fd6f00' : '#e5e5e5'
    }
  });

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>My Projects</h1>
      <p style={descriptionStyle}>
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam venenatis fghh hgjj nisi ante.
      </p>
      <div style={menuBarStyle}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={categoryStyle(category.selected)}
            onMouseOver={(e) => {
              if (!category.selected) {
                e.currentTarget.style.backgroundColor = '#e5e5e5';
              }
            }}
            onMouseOut={(e) => {
              if (!category.selected) {
                e.currentTarget.style.backgroundColor = '#f3f3f3';
              }
            }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

