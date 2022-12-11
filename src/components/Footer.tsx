import React from 'react'
import Button, { ButtonType } from './Button/Button'
import AddLogo from '../static/images/add.svg'

const footer = () => (
  <footer className='footer'>
    <div className='footer__copyright'>
      &copy; 2022 Made with ❤️ by{' '}
      <a
        className='footer__copyright--link'
        href='https://github.com/devandres-tech'
      >
        <Button Icon={<AddLogo />} buttonType={ButtonType.IconRound} /> Dev
        Andres
      </a>
    </div>
  </footer>
)

export default footer
