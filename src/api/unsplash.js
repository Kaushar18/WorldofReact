import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers:{
        Authorization: 'Client-ID OxKzDgq7Wal9PJ_p3-zbkqJEfvluGGRPFQHHLRLdj3M'
    }
});