import React from 'react';

interface FooterProps {
  currentWeek: string;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
}

const Footer: React.FC<FooterProps> = ({ currentWeek, goToPreviousWeek, goToNextWeek }) => {
  return (
    <div className="footer">
      <h2>{currentWeek}</h2>
      <button onClick={goToPreviousWeek}>Prev</button>
      <button onClick={goToNextWeek}>Next</button>
    </div>
  );
};

export default Footer;
