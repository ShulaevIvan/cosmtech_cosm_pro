const validateDate = (dateStrValue, fixDate=false) => {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
    const dateStr = new Date(dateStrValue).toLocaleDateString();
    let resultStr = '';

    if (dateStr.split('/') && dateStr.split('/').length === 3) {
        dateStr.split('/').forEach((num, i) => {
            if (Number(num) <= 9) {
                resultStr += `0${num}`;
            }
            else resultStr += num;

            resultStr += '/';
        });
    };
    resultStr = resultStr.replace(/\/$/, '');

    if (datePattern.test(resultStr) && !fixDate) return true;
    else if (fixDate && datePattern.test(resultStr) && datePattern.test(fixDate)) {
        const minDate = new Date(fixDate).getTime();
        const today = new Date().getTime()
        if (minDate < today) return false;
        return true;
    }
    return false;
};

export default validateDate;