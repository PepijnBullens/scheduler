import React from 'react';
import DayColumn from './DayColumn';

export default function WeekView({ days, tasks }: any) {  
  return (
    <div className="week-view">
      {days.map((day: any, index: any) => (
        <DayColumn key={index} day={day} tasks={tasks} />
      ))}
    </div>
  );
};