import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"; 

import App from './containers/App'; 
import './static/sass/style.scss'; 


const app = (
   <BrowserRouter>
      <App />
   </BrowserRouter>
); 

ReactDOM.render(app, document.getElementById('app'));