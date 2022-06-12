import {useState,useEffect} from 'react'
import YouTube from "../api/YouTube"
function useVideos(defaultTerm){
    const [videos,setVideos]= useState([])
    useEffect(()=>{
        search(defaultTerm)
    },[defaultTerm])
    const search= async (term) =>{
        const response=  await YouTube.get('/search',{
             params:{
                 q:term
             }
         });
         setVideos(response.data.items)
         }
    return [videos,search]
}
export default useVideos