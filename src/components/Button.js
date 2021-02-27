//impt
import PropTypes from 'prop-types'
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn'>{text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

/**
 * Voglio che siano stringhe e che mi rimande un errore in caso contrario
 */
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}
export default Button
