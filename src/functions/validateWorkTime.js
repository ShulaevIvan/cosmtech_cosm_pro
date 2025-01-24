const validateWorkTime = (timeStr, minValue=10, maxValue=18) => {
    const min = minValue;
    const max = maxValue;
    const validStr = timeStr.replace('\s', '');
    const hoursPattern = /^\d{2}/;
    const minutesPattern = /(\:|\-|\s)\d{2}$/
    const fullPattern = /^\d{2}(\:|\-|\s)\d{2}$/;
    const hours = hoursPattern.exec(validStr);
    const minutes = minutesPattern.exec(validStr);

    if (hours && (Number(hours[0].replace(/^[0]/, '')) >= min && Number(hours[0].replace(/^[0]/, '')) < max) && 
        minutes && Number(minutes[0].replace(/\:|\-|\s/, '')) <= 59) {
            
        if (fullPattern.test(`${hours[0]}${minutes[0]}`)) {
            return `${hours[0]}:${minutes[0].replace(/(\:|\-|\s)/, '')}`;
        }
        return false;
    }

    return false;

};

export default validateWorkTime;