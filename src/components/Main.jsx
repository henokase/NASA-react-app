import { useEffect, useState } from "react";
import mars from '../assets/mars.jpg'
import EmbedYoutTube from './EmbedYoutTube.jsx'
import ModeButton from './ModeButton.jsx'

const Main = ({data}) => {
  const isMediaVideo = data.media_type == 'video'
  const [imgMode, setImgMode] = useState('portrait')
  const [style, setStyle] = useState()

  useEffect(() => {
    imgMode == 'portrait' ? setStyle({'object-fit': 'cover'}) : setStyle({'object-fit': 'contain'})
  }, [imgMode])

  function handleImgMode(e) {
    setImgMode(e.target.value)
  }

  return (
    <div className='imageContainer'>
      {(!isMediaVideo) && <ModeButton imgMode={imgMode} handleImgMode={handleImgMode}/>}
      {isMediaVideo ? (<EmbedYoutTube data = {data}/> ) : (<img src={data.hdurl} alt='mars' style={style}/>)}
    </div>
  )
}

export default Main