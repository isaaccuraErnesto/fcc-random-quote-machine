const Quote = ({quote}) => {
    return (
        <blockquote id='text' cite='https://github.com/lukePeavey/quotable'>
            "{quote.content}"
        </blockquote>
    )
}

export default Quote
