import React, {Component} from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

  

   render() {
// `background: linear-gradient(90deg, #000000, #ffffff00),

      const backgroundStyle = {
         // overflow: 'hidden',

         // backgroundRepeat: "no-repeat",
         // // backgroundPosition: 'center center'
         // background: "red",
         backgroundSize: "cover",
         // backgroundImage: 'linear-gradient(to right, #1c1b1b, rgb(237, 232, 232)'
         backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path || this.props.movie.poster_path})`,
      }
      return (
         <Aux>
            <Backdrop show={this.props.show} toggleBackdrop={this.props.modalClosed} />
               <div
                  style={backgroundStyle}
                  className={"modal " + (this.props.show ? "show" : "hide")}>
                  {this.props.children}
               </div>
           
       
         </Aux>
      ); 
   }

}

export default Modal; 