import React from 'react'

const backdrop = ({ toggleBackdrop, show }) =>
  show ? (
    <div
      onClick={toggleBackdrop}
      className={`backdrop ${show ? 'hideB' : ''}`}
    ></div>
  ) : null

export default backdrop
