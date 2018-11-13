import React, { Component } from 'react';
import Navigation from "./Navigation/Navigation"
import Layout from './Layout/Layout'; 
import axios from 'axios'; 
import MovieRow from '../components/MovieRow/MovieRow'
// import SearchMovie from './SearchMovie/SearchMovie'; 

class App extends Component {

  state = {
    myVal: true,
       //an array that will hold all of our movies component 
    rows: []
  }

 myB = () => {
   this.setState({
     myVal: true
   })
 }




makeAipCall = (searchItem) => {
      const url = "https://api.themoviedb.org/3/search/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&page=1&query=" + searchItem;
      axios.get(url)
         .then(res => {
            // extract the data from json object 
            const movies = res.data.results;
            // Holds our movieComponent. 
            let movieRows = [];
            let total = 0; 
            movies.forEach((movie) => {
               // manually build our image url and set it on the movie object 
               movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
              total+= 1; 
               // pass in the movie object to our MovieRow component and keep it in a variable called 
               // movieComponent 
               const movieComponent = <MovieRow 
                                          val={total}
                                          key={movie.id} 
                                          movie={movie} 
                                          />
               // push our movieComponent to our movieRows array; 
               movieRows.push(movieComponent);
            })
            // update state 
            this.setState({ rows: movieRows });
         }).catch(error => {
            console.log(error);
         });
   }

   // get the user input and pass it to the makeAPICall function 
  //  searchHandler = (event) => {
  //     // const searchItem = event.target.value; 
  //     // this.makeAipCall(searchItem); 
  //     alert("Hello");
  //  }


  myF = (event) => {
    this.setState({
      myVal: false
    }); 
    const userInput = event.target.value; 
    this.makeAipCall(userInput); 
    console.log(userInput);
  }




   render() {


      return (
         <div>  
          <Navigation showMan={this.myF} />
          {this.state.myVal ? <Layout /> : <div onClick={this.myB} className="no">{this.state.rows}</div>}

         </div>
         
      );
   }
}

export default App; 