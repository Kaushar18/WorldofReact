import axios from "axios"
const KEY="AIzaSyDWJoHamBn0G8J5p7eEKtEjh0cTuOJ0LME"
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part :  'snippet',
        maxResults:5,
        type: 'video',
        key : KEY
    }
});