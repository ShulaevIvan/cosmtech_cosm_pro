const setUrlToStorage = (urlPath) => {
    localStorage.setItem('currentPath', `${urlPath}`);
};

const getUrlFromStorage = () => {
    return localStorage.getItem('currentPath');
}
export { setUrlToStorage, getUrlFromStorage };