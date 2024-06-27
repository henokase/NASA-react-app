import React from 'react'

const Footer = ({sideVisible, handleSideToggle, data}) => {
  return (
    <footer className='footer'>
      <div className='footerDesc'>
        <p className='footerTitle'>APOD PROJECT</p>
        <p className='footerDescription'>{data.title}</p>
      </div>
      <button className='footerBtn' onClick={() => {
        handleSideToggle(!sideVisible)
      }}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}

export default Footer