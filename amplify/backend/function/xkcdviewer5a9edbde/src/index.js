const axios = require('axios');
exports.handler = async (event) => {
    let URL;
    if (event.arguments) {
        const { comicId } = event.arguments;
        if (comicId === 0) {
            URL = 'https://xkcd.com/info.0.json';
        } else {
            URL = `https://xkcd.com/${comicId}/info.0.json`;
        }
    }
    try {
        const resp = await axios.get(URL)
        return resp.data
    } catch (err) {
        throw new Error(err.code)
    }
};
