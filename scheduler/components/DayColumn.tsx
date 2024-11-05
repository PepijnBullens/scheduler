import React from 'react';

interface TaskInfo {
  color: string;
  task: string;
  time: string;
  description: string;
}

interface DayColumnProps {
  day: string;
  tasks: TaskInfo[];
}

const DayColumn: React.FC<DayColumnProps> = ({ day, tasks }) => {
  return (
    <div className="day-column">
      <h3>{day}</h3>
      <ul>
        {tasks.map((taskInfo, index) => (
          <li key={index} style={{ backgroundColor: taskInfo.color }}>
            <p className="task">{taskInfo.task}</p>
            <p className="time">{taskInfo.time}</p>
            <p className="description">{taskInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayColumn;
