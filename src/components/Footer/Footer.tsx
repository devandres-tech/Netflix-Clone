import React from 'react'
import './footer.scss'

const footer = () => (
  <footer className='footer'>
    <div className='footer__copyright'>
      &copy; {new Date().getFullYear()} Made with ❤️ by{' '}
      <a
        className='footer__copyright--link'
        href='https://github.com/devandres-tech'
      >
        Dev Andres
      </a>
    </div>
  </footer>
)

export default footer
