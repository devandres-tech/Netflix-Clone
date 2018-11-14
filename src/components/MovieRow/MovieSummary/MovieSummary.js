import React from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 

const movieSummary = (props) => (

   // // map object into an array of jsx elemenst 
   // const movieDetails = Object.keys(props.movies)
   //    .map(movieKey => {
   //       return <p>{movieKey}: {props.movies[movieKey]}</p>
   //    }); 
   

   <Aux>
      {/* <img src="" alt=""/> */}
      <h1>Movie Title</h1>
      <p>rating: 45% realease-date: 2018 runtime: 100m </p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, delectus! Veniam error perferendis pariatur atque facere? Repudiandae, quia mollitia sapiente 
         necessitatibus vitae error assumenda maiores perferendis quaerat excepturi voluptatum quidem?</p>
       <button>Play</button>  
       <button>My list</button>  
       <p>staring: mdf gglo bool emmy djf </p>
       <p>Genres: mdf gglo bool emmy djf </p>
   </Aux>
); 

export default movieSummary; 