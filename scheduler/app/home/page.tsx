"use client";

import { useState } from "react";
import Header from "../../components/Header";
import WeekView from "../../components/WeekView";

export default function HomePage() {
  // Define week and tasks state
  const [currentWeek, setCurrentWeek] = useState("Nov 5 - Nov 11");
  const [tasks, setTasks] = useState({
    "Monday": [
      { color: "red", task: "task 1", time: "10:00 AM", description: "This is a description for task 1" },
      { color: "blue", task: "task 2", time: "11:00 AM", description: "This is a description for task 2" },
      { color: "green", task: "task 3", time: "12:00 PM", description: "This is a description for task 3" },
      
    ],
    "Tuesday": [
      { color: "red", task: "task 4", time: "10:00 AM", description: "This is a description for task 4" },
      { color: "blue", task: "task 5", time: "11:00 AM", description: "This is a description for task 5" },
      { color: "green", task: "task 6", time: "12:00 PM", description: "This is a description for task 6" }
    ],
    "Wednesday": [
      { color: "red", task: "task 7", time: "10:00 AM", description: "This is a description for task 7" },
      { color: "blue", task: "task 8", time: "11:00 AM", description: "This is a description for task 8" },
      { color: "green", task: "task 9", time: "12:00 PM", description: "This is a description for task 9" }
    ],
    "Thursday": [
      { color: "red", task: "task 10", time: "10:00 AM", description: "This is a description for task 10" },
      { color: "blue", task: "task 11", time: "11:00 AM", description: "This is a description for task 11" },
      { color: "green", task: "task 12", time: "12:00 PM", description: "This is a description for task 12" }
    ],
    "Friday": [
      { color: "red", task: "task 13", time: "10:00 AM", description: "This is a description for task 13" },
      { color: "blue", task: "task 14", time: "11:00 AM", description: "This is a description for task 14" },
      { color: "green", task: "task 15", time: "12:00 PM", description: "This is a description for task 15" }
    ],
    "Saturday": [
      { color: "red", task: "task 16", time: "10:00 AM", description: "This is a description for task 16" },
      { color: "blue", task: "task 17", time: "11:00 AM", description: "This is a description for task 17" },
      { color: "green", task: "task 18", time: "12:00 PM", description: "This is a description for task 18" }
    ],
    "Sunday": [
      { color: "red", task: "task 19", time: "10:00 AM", description: "This is a description for task 19" },
      { color: "blue", task: "task 20", time: "11:00 AM", description: "This is a description for task 20" },
      { color: "green", task: "task 21", time: "12:00 PM", description: "This is a description for task 21" }
    ]
  });

  // Week navigation functions
  const goToPreviousWeek = () => {
    const [startDate, endDate] = currentWeek.split(" - ");
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);
    
    newStartDate.setDate(newStartDate.getDate() - 7);
    newEndDate.setDate(newEndDate.getDate() - 7);

    setCurrentWeek(`${newStartDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${newEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
  };

  const goToNextWeek = () => {
    const [startDate, endDate] = currentWeek.split(" - ");
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(endDate);
    
    newStartDate.setDate(newStartDate.getDate() + 7);
    newEndDate.setDate(newEndDate.getDate() + 7);

    setCurrentWeek(`${newStartDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${newEndDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`);
  };

  return (
    <div className="container">
      <Header
        currentWeek={currentWeek}
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
      />
      <div className="planner">
        <WeekView days={Object.keys(tasks)} tasks={tasks} />
      </div>
    </div>
  );
}
