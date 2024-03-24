import axios from "axios"

const KEY = "AIzaSyAKao7M_DCnHQ725tegcSHvFTi1SIoDRFI"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    },
    headers:{}
})