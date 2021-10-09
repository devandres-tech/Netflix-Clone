import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { useScroll } from '../hooks/useScroll'
import SearchLogo from '../static/images/search-icon.svg'
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png'
import BellLogo from '../static/images/bell-logo.svg'
import DropdownArrow from '../static/images/drop-down-arrow.svg'
import DropdownContent from '../components/DropdownContent'

const Navbar = ({ history }) => {
  const searchInput = React.useRef(null)
  const [userInput, setUserInput] = useState('')
  const [scrollDimensions] = useScroll()
  const { scrollY } = scrollDimensions

  const onChange = async (event) => {
    setUserInput(event.target.value)
  }

  useEffect(() => {
    if (
      document.activeElement === searchInput.current &&
      userInput.length === 0
    ) {
      history.push('/browse')
    }
    if (userInput.length > 0) history.push(`/search?q=${userInput}`)
  }, [userInput, searchInput])

  const onLogoClick = () => {
    setUserInput('')
  }

  return (
    <nav className={'navigation ' + (scrollY > 50 ? 'black' : '')}>
      <ul className='navigation__container'>
        <NavLink to='/' onClick={() => onLogoClick()}>
          <img
            className='navigation__container--logo'
            src={NetflixLogo}
            alt=''
          />
        </NavLink>
        <DropdownArrow className='navigation__container--downArrow-2'></DropdownArrow>
        <div className='navigation__container-link pseudo-link'>Home</div>
        <div className='navigation__container-link pseudo-link'>TV Shows</div>
        <div className='navigation__container-link pseudo-link'>Movies</div>
        <div className='navigation__container-link pseudo-link'>
          Recently Added
        </div>
        <div className='navigation__container-link pseudo-link'>My List</div>

        <div className='navigation__container--left'>
          <SearchLogo className='logo' />
          <input
            ref={searchInput}
            value={userInput}
            onChange={(event) => onChange(event)}
            className='navigation__container--left__input'
            type='text'
            placeholder='Title, genres, people'
          />
        </div>

        <div className='navigation__container-link pseudo-link'>KIDS</div>
        <div className='navigation__container-link pseudo-link'>DVD</div>
        <BellLogo className='navigation__container--bellLogo' />

        <DropdownContent />
        <DropdownArrow className='navigation__container--downArrow' />
      </ul>
    </nav>
  )
}

export default withRouter(Navbar)
