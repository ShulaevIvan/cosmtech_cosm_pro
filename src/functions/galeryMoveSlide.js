const galleryMoveSlide = (array, steps) => {
    const len = array.length;
    steps %= len;
    return array.slice(steps).concat(array.slice(0, steps));
};

export default galleryMoveSlide;