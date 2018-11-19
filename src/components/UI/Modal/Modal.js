import React, {Component} from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Backdrop from '../Backdrop/Backdrop'




class Modal extends Component {


   render() {
      const backgroundStyle = {
         backgroundSize: "cover",
         backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path || this.props.movie.poster_path})`,
      }
      return (
         <Aux>
            <Backdrop show={this.props.show} toggleBackdrop={this.props.modalClosed} />
               <div
                  style={backgroundStyle}
               className={(this.props.show ? "modal show" : "modal hide")}>
                  {this.props.children} 
               </div>
         </Aux>
      ); 
   }

}

export default Modal; 