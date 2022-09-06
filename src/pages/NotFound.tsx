import React from 'react'

const NotFound = () => {
  return (
    <div className='not-found__message'>
      {/* TODO: add css to match netflix not found page */}
      <h1>LOST YOUR WAY?</h1>
      <p>
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </p>
      <button>Netflix Home</button>
      <span>
        Error Code <strong>NSES-404</strong>
      </span>
      <span>
        FROM <strong>LOST IN SPACE</strong>
      </span>
    </div>
  )
}

export default NotFound
