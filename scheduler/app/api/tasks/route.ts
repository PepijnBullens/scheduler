import { prisma } from "../../../lib/prisma"; // Adjust the import if needed

export async function GET(req: Request) {
  const url = new URL(req.url);
  const startDateParam = url.searchParams.get("startDate");
  const endDateParam = url.searchParams.get("endDate");

  if (!startDateParam || !endDateParam) {
    return new Response(JSON.stringify({ error: "Start date and end date are required" }), {
      status: 400,
    });
  }

  try {
    const startDate = new Date(startDateParam);
    const endDate = new Date(endDateParam);

    // Ensure the end date is the end of the day
    endDate.setHours(23, 59, 59, 999);

    // Fetch tasks from the database within the week range
    const tasksFromDB = await prisma.task.findMany({
      orderBy: { date: 'asc' },
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        color: true,
      },
    });

    return new Response(JSON.stringify({ tasksFromDB }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch tasks" }),
      { status: 500 }
    );
  }
}
