// import React, { Component } from 'react';
// import axios from "axios"; 
// // import Search from '../../components/Search/Search'; 
// import MovieRow from '../../components/MovieRow/MovieRow'; 
// import Layout from '../Layout/Layout';


// class SearchMovie extends Component {

//  state = {
//       // an array that will hold all of our movies component 
//       rows: [],
//       myVal: false      
//    }

//    makeAipCall = (searchItem) => {
//       const url = "https://api.themoviedb.org/3/search/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&page=1&query=" + searchItem;
//       axios.get(url)
//          .then(res => {
//             // extract the data from json object 
//             const movies = res.data.results;
//             // Holds our movieComponent. 
//             let movieRows = [];
//             let total = 0; 
//             movies.forEach((movie) => {
//                // manually build our image url and set it on the movie object 
//                movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
//               total+= 1; 
//                // pass in the movie object to our MovieRow component and keep it in a variable called 
//                // movieComponent 
//                const movieComponent = <MovieRow 
//                                           val={total}
//                                           key={movie.id} 
//                                           movie={movie} 
//                                           />
//                // push our movieComponent to our movieRows array; 
//                movieRows.push(movieComponent);
//             })
//             // update state 
//             this.setState({ rows: movieRows });
//          }).catch(error => {
//             console.log(error);
//          });
//    }



//    // get the user input and pass it to the makeAPICall function 
//    searchHandler = (event) => {
//       // const searchItem = event.target.value; 
//       // this.makeAipCall(searchItem); 
//       alert("Hello");
//    }


//    render() {



//       return (
//       <div>
//                   <input
//                         onKeyPress={this.searchHandler}
//                         onClick={this.props.show}
//                         type="text"
//                         placeholder="Title, genres, people" />
//         {/* <Search onSearch={this.searchHandler} onShow={this.onChangeHandler} showAll={this.state.myVal}/> */}
//         {event.key}
//       </div>
         
//       );
//    }
// }

// export default SearchMovie; 