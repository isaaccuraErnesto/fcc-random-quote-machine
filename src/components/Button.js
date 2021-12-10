import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button
        id='new-quote'
        onClick={onClick}
        >
        {text}
        </button>
)

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button