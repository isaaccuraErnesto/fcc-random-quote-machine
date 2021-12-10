import Quote from './Quote'
import Author from './Author'


const QuoteBox = ({quote}) => {
    return (
        <figure id='quote-and-author'>
            <Quote quote={quote}/>
            <Author quote={quote}/>            
        </figure>
    )
}

export default QuoteBox
