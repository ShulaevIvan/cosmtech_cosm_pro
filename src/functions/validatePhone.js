const validatePhone = (phoneString) => {
    const phonePattern = /^[0-9]\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})([0-9]{2})$/;
    const symPattern = /[`!@№#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g.test(phoneString);
    const enRuPattern = /[a-zA-Zа-яА-Я]+/.test(phoneString);
    

    if (phoneString.length <= 11 && !symPattern && !enRuPattern) {
        return phoneString.replace(phonePattern, (all, group2, group3, group4, group5) => {
                return `+7 (${group2})-${group3}-${group4}-${group5}`
        });
    }
    return phoneString.replace(/.$/, '').replace(phonePattern, (all, group2, group3, group4, group5) => {
        return `+7 (${group2})-${group3}-${group4}-${group5}`
    });
};


export default validatePhone;