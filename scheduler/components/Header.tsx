import React from 'react';

interface HeaderProps {
  currentWeek: string;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentWeek, goToPreviousWeek, goToNextWeek }) => {
  return (
    <div className="header">
      <h2>{currentWeek}</h2>
      <button onClick={goToPreviousWeek}>Prev</button>
      <button onClick={goToNextWeek}>Next</button>
    </div>
  );
};

export default Header;
