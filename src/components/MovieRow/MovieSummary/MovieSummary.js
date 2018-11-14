import React from 'react'; 
import Aux from '../../../hoc/Aux/Aux';
import MovieRow from '../MovieRow'; 
 

const movieSummary = (props) => (

 // get movieid and make api call 

 // render data dynamically 
   

   <Aux>
    
      {/* <img src="" alt=""/> */}
      <h1>Movie Title: {props.movieInfo.title}</h1>
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