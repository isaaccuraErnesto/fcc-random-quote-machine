import PropTypes from 'prop-types'

const Share = ({ id, title, href, className, alt, quote }) => {
    return (
        <a
        href={href+"?text=%27"+quote.content+"%27%20%20-%20"+quote.author+"&hashtags=quote,inspirational,randomquotemachine"}
        id={id}
        title={title}
        target='_blank'
        rel='noreferrer'
        alt={alt}
        >
        <i className={className} style={{verticalAlign: 'middle'}}></i>
        </a>
)

}

Share.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    quote: PropTypes.object
}

export default Share