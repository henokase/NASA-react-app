import React from 'react'

const Side = ({sideVisible, handleSideToggle, data}) => {
  return (
    <>
      <div className="sideBarOverlay" onClick={() => {
        handleSideToggle(!sideVisible)
      }}></div>
      <div className='sideBar'>
        <div className="title">
          {data.title}
        </div>
        <div className="title date">
          {data.date}
        </div>
        <div className="description">
          <p>{data.explanation}</p>
        </div>
        <button className='sideBtn' onClick={() => {
          handleSideToggle(!sideVisible)
        }}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
    
  )
}

export default Side