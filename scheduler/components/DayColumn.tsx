import React from 'react';

export default function DayColumn({ day, tasks }: any) {     
  const tasksForDay = Object.values(tasks).map((task: any) => {
    const taskDay = (new Date(task.date).getDay() + 6) % 7;
    if (taskDay === day[1]) {
      return task;
    }
  }).filter(Boolean);

  return (
    <div className="day-column">
      <h3>{day[0]}<br></br><small>{day[2]}</small></h3>
      <ul>
        {tasksForDay.length === 0 ? (
          <li className="no-task">
            <p className="task">No tasks</p>
          </li>
        ) : (
          tasksForDay.map((task: any, index: any) => (
            <li key={index} style={{ backgroundColor: task.color }}>
              <p className="task">{task.task}</p>
              <p className="time">{new Date(task.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
              <p className="description">{task.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};