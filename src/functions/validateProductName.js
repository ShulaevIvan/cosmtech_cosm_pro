const validateProductName = (productNameStr) => {
    const pattern = /^[a-z|A-Z|а-я|А-Я]*$/;
    const prepStr = productNameStr.replace(/\s/g,'');
    
    if (pattern.test(prepStr) && prepStr.length >= 3) return true
    return false;
};

export default validateProductName;