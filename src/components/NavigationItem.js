import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
   <NavLink className="navigation__container-link" exact={props.exact}
      to={props.link}>{props.children}</NavLink>
)

export default navigationItem;