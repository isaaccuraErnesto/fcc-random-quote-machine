import Button from './Button'
import Share from './Share'

const Buttons = ({onClick, quote, id}) => {
    return (
        <div id={id}>
            <Share id='tweet-quote' title='Share this quote on Twitter!' href='https://twitter.com/intent/tweet' className='fa fa-twitter'
            alt='Twitter Icon' quote={quote}/>
            <Button text='New Quote' onClick={onClick}/>
        </div>
    )
}

export default Buttons
