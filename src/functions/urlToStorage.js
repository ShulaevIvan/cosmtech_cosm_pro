const setUrlToStorage = (urlPath) => {
    localStorage.setItem('currentPath', `${urlPath}`);
};

export { setUrlToStorage };