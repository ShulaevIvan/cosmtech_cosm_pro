const validateUrl = (urlStr) => {
    const pattern = /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/;
    return pattern.test(urlStr);
};

export default validateUrl