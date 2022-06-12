import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos,onSelectVideo}) =>{
    const renderedVideo = videos.map((v) =>{
        return <VideoItem key={v.id.videoId} onSelectVideo={onSelectVideo} video={v}/>
    })
    return(
        <div className="ui list">
            {renderedVideo}
        </div>

    );
}

export default VideoList;