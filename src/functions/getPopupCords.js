const getPopupCords = (left, top, offsetLeft, offsetTop) => {
    const x = left - offsetLeft;
    const y = top - offsetTop;
    return {left: x, top: y};
};

export default getPopupCords;