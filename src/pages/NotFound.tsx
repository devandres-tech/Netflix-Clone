import React from 'react'

const NotFound = () => {
  return (
<div className="not-found">
  <div className="not-found--header">
    <div className="not-found--logo">
      <a href="/">Netflix</a></div>
    </div>
    <div className="not-found--content">
        <h1>Lost your way?</h1>
        <div className="not-found--content--body">
          <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
          <div className="not-found--content--buttons">
            <a href="/">
              <button className="color-primary not-found--button" type="button">
                <span>Netflix Home</span></button>
                </a>
                </div>
                <div className="not-found--content--errorCode">
                  <span id="" data-uia="">Error Code <strong>NSES-404</strong></span>
                </div>
            </div>
      </div>
        <span id="" className="not-found--imageSource" >FROM <strong>LOST IN SPACE</strong></span>
  </div>
  )
}

export default NotFound
