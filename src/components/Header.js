//RAFCE
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('Click');
  }
  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color='green' text='Add' onClick = {onClick}/>
    </header>
  )
}

Header.defaultProps = {
  title : PropTypes.string.isRequired
}

Header.defaultProps = {
  title: 'Task Tracker'
}
export default Header
