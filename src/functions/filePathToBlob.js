const filePathToBlob = (filePath, fileType) => {
    const videoBlob = new Blob([filePath], {type: fileType});
    return URL.createObjectURL(videoBlob);

};

export default filePathToBlob;