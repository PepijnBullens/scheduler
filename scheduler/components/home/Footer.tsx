import React from 'react';

interface FooterProps {
  currentWeek: string;
  goToPreviousWeek: () => void;
  goToNextWeek: () => void;
}

export default function Footer({ currentWeek, goToPreviousWeek, goToNextWeek }: any) {
  return (
    <div className="footer">
      <div className="sign-in">
        <a href="/sign-in">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            className="profile-icon"
          >
            <g fill="currentColor">
              <path d="M16.14 12.33C17.28 11.24 18 9.71 18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 1.71.72 3.24 1.86 4.33C3.52 13.05 0 14.94 0 18c0 4 1 4 12 4s12 0 12-4c0-3.06-3.52-4.95-7.86-5.67z"></path>
            </g>
          </svg>
        </a>
      </div>
      <h2>{currentWeek}</h2>
      <div className="week-controllers">
        <button onClick={goToPreviousWeek}>Prev</button>
        <button onClick={goToNextWeek}>Next</button>
      </div>
    </div>
  );
}
