import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Video = () => {
    return (
        <main id = "video-container">
            <iframe
                key={uuidv4()}
                title= "launch"
                id ="video"
                src="https://player.vimeo.com/video/174380139"
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </main>
    )
}
export default Video;