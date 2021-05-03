// Import files and CSS
import './button.styles.scss';

const Button = ({className, ariaLabel, children}) => (
   <button className={`btn ${className}`} aria-label={ariaLabel}>
       {children}
   </button>
)

export default Button;