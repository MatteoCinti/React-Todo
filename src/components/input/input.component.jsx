// Import dependencies
import React from 'react';
// Import files and CSS
import './input.styles.scss';

const Input = ({type, id, className, placeholder, label, value, handleChange, handleClick}) => (
   <React.Fragment>
      <input type={type} id={id} value={value} className={className} placeholder={placeholder}  aria-label={placeholder} onClick={handleClick ? handleClick : null} onChange={handleChange ? handleChange : null} />
      {label ? 
         <label htmlFor={id}>
            <span className="custom-checkbox"></span>
            {label}
         </label> : 
         null
      }
   </React.Fragment>
)

export default Input;