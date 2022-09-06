import React from 'react'
import { IBackdrop } from '../../types'

const backdrop = ({ toggleBackdrop, show }: IBackdrop) =>
  show ? <div onClick={toggleBackdrop} className='backdrop'></div> : null

export default backdrop
