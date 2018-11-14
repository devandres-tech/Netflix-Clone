import React from 'react'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => (
   <Aux>
      <Backdrop show={props.show} toggleBackdrop={props.modalClosed}/>
      <div 
         className={"modal " + (props.show ? "show" : "hide")}>
         {props.children}
      </div>
   </Aux>
); 

export default modal; 