import axios from "axios"

const KEY = "AIzaSyDedKgmKoeNDAr4D6rwLCcuUoymkHs8v40"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    },
    headers:{}
})