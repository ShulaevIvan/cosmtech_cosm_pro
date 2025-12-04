export const getSeasonByDate = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const eventStart = new Date(`${currentYear}-12-4 19:30`);
    const nextYear = new Date(`${currentYear + 1}-01-01 00:00`);
    const eventLeft = Math.round(nextYear - eventStart) / (1000 * 60 * 60 * 24);
    const hoursLeft = new Date(eventLeft).getHours()

    console.log(eventLeft)
};