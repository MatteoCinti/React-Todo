// Import dependencies
import React from 'react';
// Import files and CSS
import './input.styles.scss';

const Input = ({type, id, className, placeholder, label}) => (
   <React.Fragment>
      <input type={type} id={id} className={`btn ${className}`} placeholder={placeholder}  aria-label={placeholder}/>
      {label ? 
         <label for={id}>
            <span class="custom-checkbox"></span>
            {label}
         </label> : 
         null
      }
   </React.Fragment>
)

export default Input;