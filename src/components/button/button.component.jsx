// Import files and CSS
import './button.styles.scss';

const Button = ({className, ariaLabel, children, handleClick, newListName}) => (
   <button className={`btn ${className}`} aria-label={ariaLabel} onClick={e => handleClick(e, newListName)}>
       {children}
   </button>
)

export default Button;