import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useScroll } from '../hooks/useScroll'
import { useDebounce } from '../hooks/useDebounce'
import * as movieActions from '../store/actions'
// import axios from '../axios-movies'
import SearchLogo from '../static/images/search-icon.svg'
import NetflixLogo from '../static/images/Netflix_Logo_RGB.png'
import BellLogo from '../static/images/bell-logo.svg'
import DropdownArrow from '../static/images/drop-down-arrow.svg'
import DropdownContent from '../components/DropdownContent'

const Navbar = ({ history }) => {
  const [userInput, setUserInput] = useState('')
  const searchResults = useSelector((state) => state.searchMovie)
  const [scrollDimensions] = useScroll()
  const { scrollY } = scrollDimensions

  const dispatch = useDispatch()
  const debouncedUserInput = useDebounce(userInput, 500)

  const onChange = async (event) => {
    setUserInput(event.target.value)
  }

  // useEffect(() => {
  //   if (debouncedUserInput) {
  //     history.push(`/search?=${userInput}`)
  //   }
  // }, [debouncedUserInput])

  useEffect(() => {
    userInput.length <= 0
      ? history.push('/')
      : history.push(`/search?=${userInput}`)
  }, [userInput])

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
