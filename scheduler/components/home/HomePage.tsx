"use client"; // Client-side component

import { useState, useEffect } from "react";
import Footer from "./Footer";
import WeekView from "./WeekView";

export default function HomePage({ initialTasks, initialStartDate, initialEndDate }: any) {     
    // Parse the initial start and end dates
    const startDate = new Date(initialStartDate);
    const endDate = new Date(initialEndDate);

    // Check if the dates are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error("Invalid start or end date.");
    }

    const generateDaysArray = (startDate: Date) => {
        const daysArray = [];
        const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        for (let i = 0; i < 7; i++) {
            daysArray.push([
                dayNames[i],
                i,
                new Date(startDate.setDate(startDate.getDate() + (i === 0 ? 0 : 1))).toLocaleDateString("en-US", { month: "short", day: "numeric" })
            ]);
        }
        return daysArray;
    };

    const [days, setDays] = useState(generateDaysArray(new Date(startDate)));

    const [currentWeek, setCurrentWeek] = useState({
        startDate: startDate,
        endDate: endDate,
    });

    const [tasks, setTasks] = useState(initialTasks);

    useEffect(() => {        
        const fetchTasksForWeek = async (startDate: string, endDate: string) => {
            const response = await fetch(`/api/tasks?startDate=${startDate}&endDate=${endDate}`);
            const data = await response.json();
            
            if (data.tasksFromDB) {
                setTasks(data.tasksFromDB);
                setDays(generateDaysArray(new Date(currentWeek.startDate)));
            }
        };        

        if (currentWeek.startDate && currentWeek.endDate) {
            fetchTasksForWeek(currentWeek.startDate.toISOString(), currentWeek.endDate.toISOString());
        }
    }, [currentWeek]);

    const goToPreviousWeek = () => {
        const newStartDate = new Date(currentWeek.startDate);
        const newEndDate = new Date(currentWeek.endDate);

        newStartDate.setDate(newStartDate.getDate() - 7);
        newEndDate.setDate(newEndDate.getDate() - 7);

        setCurrentWeek({
            startDate: newStartDate,
            endDate: newEndDate,
        });
    };

    const goToNextWeek = () => {        
        const newStartDate = new Date(currentWeek.startDate);
        const newEndDate = new Date(currentWeek.endDate);

        newStartDate.setDate(newStartDate.getDate() + 7);
        newEndDate.setDate(newEndDate.getDate() + 7);

        setCurrentWeek({
            startDate: newStartDate,
            endDate: newEndDate,
        });
    };

    return (
        <div className="container">
            <div className="planner">
                <WeekView days={days} tasks={tasks} />
            </div>
            <Footer
                currentWeek={`${currentWeek.startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${currentWeek.endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`}
                goToPreviousWeek={goToPreviousWeek}
                goToNextWeek={goToNextWeek}
            />
        </div>
    );
}
