import axios from "axios";
export const MOVIEKEY = "ba504d26"
export default axios.create({
    baseURL:" http://www.omdbapi.com",
    params:{
        key:MOVIEKEY,
        type:"movie"
    }

})