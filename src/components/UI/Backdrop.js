import React from 'react'

const backdrop = ({ toggleBackdrop, show }) =>
  show ? <div onClick={toggleBackdrop} className='backdrop'></div> : null

export default backdrop
