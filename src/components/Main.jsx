import mars from '../assets/mars.jpg'
import EmbedYoutTube from './EmbedYoutTube.jsx'

const Main = ({data}) => {
  const isMediaVideo = data.media_type == 'video'
  return (
    <div className='imageContainer'>
      {isMediaVideo ? (<EmbedYoutTube data = {data}/> ) : (<img src={data.hdurl} alt='mars'/>)}

    </div>
  )
}

export default Main