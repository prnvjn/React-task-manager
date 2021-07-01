import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header className='header'>
            <h1 >{title}</h1>
            <Button  text ="Add"/>
            
        </header>
    )
}
Header.defaultProps = {
    title:'Task Tracker'
}
Header.propTypes = {
    title : PropTypes.string.isRequired,
}
//css in js


export default Header
