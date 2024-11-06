import React from 'react';

interface FooterProps {
  currentWeek: string;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
}

export default function Footer({ currentWeek, goToPreviousWeek, goToNextWeek }: any) {     
  return (
    <div className="footer">
      <h2>{currentWeek}</h2>
      <div className="week-controllers">
        <button onClick={goToPreviousWeek}>Prev</button>
        <button onClick={goToNextWeek}>Next</button>
      </div>
    </div>
  );
};