
const fileToBase64 = async (data) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const url = URL.createObjectURL(data);
        reader.readAsDataURL(data);
        reader.onloadend = (e) => {
            let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
            if ((encoded.length % 4) > 0) {
                encoded += '='.repeat(4 - (encoded.length % 4));
            }
            const fileData = {
                type: data.type,
                name: data.name,
                url: url,
                file: encoded,
                date: new Date().getTime(),
            };
            resolve(fileData);
        };
    })
    .then((data) => data);
};


export default fileToBase64;