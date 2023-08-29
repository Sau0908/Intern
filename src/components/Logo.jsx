import React from 'react';

const Logo = ({ image, speed }) => {
  const style = {
    animation: `move ${speed}s linear infinite`,
  };

  return (
    <div className="logo absolute" style={style}>
      <img src={image} alt="Logo" />
    </div>
  );
};

export default Logo;
