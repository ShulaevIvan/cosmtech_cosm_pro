const validateCompany = (companyNameStr) => {
    const pattern = /^[а-я|А-Я|a-z|A-Z]{2,5}\s[а-я|А-Я|a-z|A-Z]{5,20}|^[а-я|А-Я|a-z|A-Z]{5,20}$|^[а-я|А-Я|a-z|A-Z]{2,99}\s[а-я|А-Я|a-z|A-Z]{2,99}\s[а-я|А-Я|a-z|A-Z]{2,99}$/;
    const checkResult = pattern.test(companyNameStr);

    if (!checkResult) return false;
    return true;
};

export default validateCompany;