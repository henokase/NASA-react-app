import React from 'react'

const EmbedYoutTube = ({data}) => {
    function extractYouTubeID(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null
    }
    const url = "https://www.youtube.com/embed/fisAZYNwDgk?rel=0"
    const videoID = extractYouTubeID(url)
    console.log(videoID)
    
    return (
        <iframe className='video'
            src={`https://www.youtube.com/embed/${videoID}`} 
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
        ></iframe>
    )
}

export default EmbedYoutTube