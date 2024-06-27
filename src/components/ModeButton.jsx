import React from 'react'

const ModeButton = ({imgMode, handleImgMode}) => {
  return (
    <div className='modeBtn'>
        <select id="mode" value={imgMode} onChange={handleImgMode}>
            <option value="landscape">Landscape</option>
            <option selected value="portrait">Portrait</option>
        </select>
    </div>
  )
}

export default ModeButton