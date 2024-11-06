import { prisma } from "../../lib/prisma";
import HomePage from "../../components/HomePage";

export default async function Home() {
  
  function getFirstAndLastDaysOfWeek(day: Date) {
    let curr = new Date(day);
  
    let first = curr.getDate() - (curr.getDay() + 6) % 7;
    let last = first + 6;
  
    let firstday = new Date(curr.setDate(first));
    let lastday = new Date(curr.setDate(last));
    
    curr = new Date();
    
    firstday.setHours(0, 0, 0, 0);
    lastday.setHours(23, 59, 59, 999);

    return [firstday, lastday];
  }

  const [firstday, lastday] = getFirstAndLastDaysOfWeek(new Date());

  // Pass the ISO strings to the client
  return <HomePage 
    initialTasks={await prisma.task.findMany({
      orderBy: { date: 'asc' },
      where: {
        date: {
          gte: firstday,
          lte: lastday,
        },
      },
      include: {
        color: true,
      },
    })}
    initialStartDate={firstday.toISOString()}  // ISO string for the start date
    initialEndDate={lastday.toISOString()}    // ISO string for the end date
  />;
}
