import axios from "axios"
const KEY="AIzaSyCyG8XNwn4FUXcLExM1APUoVlQfetZ3R0g"
export default axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
    params:{
        maxResults:5,
        type:"books",
        country:"US",
        isEbook:false
    }
});
 