import axios from 'axios';
const KEY = 'AIzaSyBQ8twjP7HUEW-u0z2ov2QxVd0l12M6ikI'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})