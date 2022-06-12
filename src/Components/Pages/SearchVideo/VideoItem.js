import React from 'react'
import "./VideoItem.css"
const VideoItem = ({video, onSelectVideo}) =>{
    return(
        <div onClick={() =>onSelectVideo(video)} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
            <a> 
            {video.snippet.title}
            </a> 
            <div>
                {video.snippet.channelTitle}
            </div>
            <div>
                {video.snippet.publishedAt}
            </div>

                </div> 
        </div>
    )
}
export default VideoItem;