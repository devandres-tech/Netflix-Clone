import React, { useState } from 'react'

import PlayLogo from '../static/images/play-button.svg'
import { ButtonType } from './Button/Button'
import Button from './Button/Button'
import MoreInfo from '../static/images/more-info.svg'
import MuteIcon from '../static/images/mute.svg'
import UnmuteIcon from '../static/images/unmute.svg'
import ReactPlayer from 'react-player'

interface IHeader {
  name: string
  overview: string
}

const Header = ({ name, overview }: IHeader) => {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <header className='header'>
      <ReactPlayer
        playing={true}
        loop={true}
        width='100%'
        height='100%'
        volume={1}
        muted={isMuted}
        className='header__video'
        url='https://vimeo.com/384025132'
      />
      <h1 className='header__container-heading'>{name}</h1>
      <Button
        Icon={<PlayLogo />}
        buttonType={ButtonType.Primary}
        onClick={() => alert('not a movie!')}
        label={'Play'}
      />
      <Button
        Icon={<MoreInfo />}
        buttonType={ButtonType.Secondary}
        label={'More Info'}
      />
      <Button
        Icon={isMuted ? <MuteIcon /> : <UnmuteIcon />}
        buttonType={ButtonType.IconRound}
        onClick={() => setIsMuted(!isMuted)}
        customClassName={'header__container-btnVolume'}
      />
      <p className='header__container-overview'>{overview}</p>
      <div className='header__container--fadeBottom' />
    </header>
  )
}

export default Header
