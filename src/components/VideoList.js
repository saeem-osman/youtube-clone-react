import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) =>{
    const renderedItem = videos.map((video)=>{
        return <VideoItem video={video} />
    })


    return <div className="ui relaxed divided list">{renderedItem}</div>
}



export default VideoList