// Import files and CSS
import './button.styles.scss';

const Button = ({className, ariaLabel, children, handleClick, newElementName}) => (
   <button className={`btn ${className}`} aria-label={ariaLabel} onClick={e => handleClick(e, newElementName)}>
       {children}
   </button>
)

export default Button;