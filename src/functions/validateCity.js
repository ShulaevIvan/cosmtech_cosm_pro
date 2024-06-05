const validateCity = (cityStr) => {
    return /^([a-zA-Z]|[а-яA-Я])+(?:[\s-]([a-zA-Z]|[а-яА-Я])+)*$/.test(cityStr);
};

export default validateCity;