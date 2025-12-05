import Snow from "./snow";

export const findEventScriptByDate = () => {
    const currentDate = new Date();
    
    const holydaysEvents = [
        {
            id: 1, 
            eventDay: {
                name: 'newYear',
                start: new Date(`${currentDate.getFullYear()}-12-4 19:30`),
                end: new Date(`${currentDate.getFullYear() + 1}-01-12 00:00`),
                eventScript:  () => new Snow()
            }
        }
    ];

    const targetEvent = holydaysEvents.find((holydayItem) => holydayItem.eventDay.start <= currentDate && holydayItem.eventDay.end >= currentDate);
    if (targetEvent) targetEvent.eventDay.eventScript();
};