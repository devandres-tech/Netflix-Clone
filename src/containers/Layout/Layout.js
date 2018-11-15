import React, { Component } from 'react';
import axios from 'axios'; 
import Header from '../../components/Header/Header'; 
import MovieShowcase from '../MovieShowcase/MovieShowcase'; 
import MovieOriginals from '../MovieOriginals/MovieOriginals'; 
import Footer from '../../components/Footer/Footer'; 
import { BrowserRouter } from "react-router-dom"; 


class Layout extends Component {

  state = {
    selectedMovie: {}
  }

  componentDidMount = () => {
    this.getMovie(); 
  }
  
  71411
  getMovie = () => {
    // 1) make api call to retrieve movie 
    const url = "https://api.themoviedb.org/3/tv/71411?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0";
    axios.get(url) 
      .then(res => {
        const movieData = res.data; 
        this.setState({ selectedMovie: movieData })

      }).catch(error => {
        console.log(error); 
      })
  
  }


   render() {


      return (
      <BrowserRouter>
          <div className="container">
            <Header movie={this.state.selectedMovie}/>
            <MovieShowcase />
            <MovieOriginals />
           <Footer /> 
          </div>
        </BrowserRouter>)
   }
}

export default Layout; 