import React from 'react';
import DayColumn from './DayColumn';

interface TaskInfo {
  color: string;
  task: string;
  time: string;
  description: string;
}

interface WeekViewProps {
  days: string[];
  tasks: Record<string, TaskInfo[]>;
}

const WeekView: React.FC<WeekViewProps> = ({ days, tasks }) => {
  return (
    <div className="week-view">
      {days.map((day, index) => (
        <DayColumn key={index} day={day} tasks={tasks[day]} />
      ))}
    </div>
  );
};

export default WeekView;
