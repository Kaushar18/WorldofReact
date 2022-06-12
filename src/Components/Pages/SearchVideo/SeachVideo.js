import React, { useState, useEffect } from 'react'
import SearchBarVideo from './SearchBarVideo'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../../../Hooks/useVideos'

function SeachVideo(){
    
    const [selectedVideo,setSelectedVideo] = useState('')
    const [videos,search] = useVideos('tree')
    useEffect(()=>{
        setSelectedVideo(videos[0])  

    },[videos])
    return(
        <div className="ui container">
                <SearchBarVideo onFormSubmit={search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectVideo={setSelectedVideo} videos={videos} />
                        </div>
                    </div>
                </div>
                
            </div>

    )
}


export default SeachVideo
