"use client";

import { useState } from "react";
import Footer from "../../components/Footer";
import WeekView from "../../components/WeekView";

export default function HomePage() {
  // Define week and tasks state
  const [currentWeek, setCurrentWeek] = useState("Nov 5 - Nov 11");
  const [tasks, setTasks] = useState({
    "Monday": [
      { color: "#003366", task: "task 1", time: "10:00 AM", description: "This is a description for task 1" },
      { color: "#006F6A", task: "task 2", time: "11:00 AM", description: "This is a description for task 2" },
      { color: "#6A5ACD", task: "task 3", time: "12:00 PM", description: "This is a description for task 3" },
    ],
    "Tuesday": [
      { color: "#228B22", task: "task 4", time: "10:00 AM", description: "This is a description for task 4" },
      { color: "#50C878", task: "task 5", time: "11:00 AM", description: "This is a description for task 5" },
      { color: "#808000", task: "task 6", time: "12:00 PM", description: "This is a description for task 6" }
    ],
    "Wednesday": [
      { color: "#4B0082", task: "task 7", time: "10:00 AM", description: "This is a description for task 7" },
      { color: "#B57EDC", task: "task 8", time: "11:00 AM", description: "This is a description for task 8" },
      { color: "#8E4585", task: "task 9", time: "12:00 PM", description: "This is a description for task 9" }
    ],
    "Thursday": [
      { color: "#800020", task: "task 10", time: "10:00 AM", description: "This is a description for task 10" },
      { color: "#DC143C", task: "task 11", time: "11:00 AM", description: "This is a description for task 11" },
      { color: "#6A1A1A", task: "task 12", time: "12:00 PM", description: "This is a description for task 12" }
    ],
    "Friday": [
      { color: "#003366", task: "task 13", time: "10:00 AM", description: "This is a description for task 13" },
      { color: "#006F6A", task: "task 14", time: "11:00 AM", description: "This is a description for task 14" },
      { color: "#6A5ACD", task: "task 15", time: "12:00 PM", description: "This is a description for task 15" }
    ],
    "Saturday": [
      { color: "#228B22", task: "task 16", time: "10:00 AM", description: "This is a description for task 16" },
      { color: "#50C878", task: "task 17", time: "11:00 AM", description: "This is a description for task 17" },
      { color: "#808000", task: "task 18", time: "12:00 PM", description: "This is a description for task 18" }
    ],
    "Sunday": [
      { color: "#4B0082", task: "task 19", time: "10:00 AM", description: "This is a description for task 19" },
      { color: "#B57EDC", task: "task 20", time: "11:00 AM", description: "This is a description for task 20" },
      { color: "#8E4585", task: "task 21", time: "12:00 PM", description: "This is a description for task 21" }
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
      <div className="planner">
        <WeekView days={Object.keys(tasks)} tasks={tasks} />
      </div>
      <Footer
        currentWeek={currentWeek}
        goToPreviousWeek={goToPreviousWeek}
        goToNextWeek={goToNextWeek}
      />
    </div>
  );
}
