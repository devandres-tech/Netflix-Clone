import React from 'react'

const NotFound = () => {
<<<<<<< HEAD
  return (
    <div>
      <h1>NOT FOUND</h1>
    </div>
  )
}

export default NotFound
=======
	return (
		<div className='not-found__message'>
			{/* TODO: add css to match netflix not found page */}
			<h1>LOST YOUR WAY?</h1>
			<p>
				Sorry, we can't find that page. You'll find lots to explore on
				the home page.
			</p>
			<button>Netflix Home</button>
			<span>
				Error Code <strong>NSES-404</strong>
			</span>
			<span>
				FROM <strong>LOST IN SPACE</strong>
			</span>
		</div>
	);
};

export default NotFound;
>>>>>>> e91ba1936642090199bf3c2946edc8cc861f864f
