import axios from 'axios'

const KEY = 'AIzaSyA5wV3VtHHH64bSZV2V6iWjPwhw8DF0XEk'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults: 5,
        key : KEY
    }
});