import React, { Component } from 'react';

import Header from '../../components/Header/Header'; 
import MovieShowcase from '../MovieShowcase/MovieShowcase'; 
import MovieOriginals from '../MovieOriginals/MovieOriginals'; 
import Footer from '../../components/Footer/Footer'; 
import { BrowserRouter } from "react-router-dom"; 


class Layout extends Component {



   render() {


      return (
      <BrowserRouter>
          <div className="container">
            <Header />
            <MovieShowcase />
            <MovieOriginals />
           <Footer /> 
          </div>
        </BrowserRouter>)
   }
}

export default Layout; 