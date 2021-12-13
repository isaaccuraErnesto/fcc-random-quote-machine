import { useState, useEffect } from 'react'
import Buttons from "./components/Buttons";
import QuoteBox from "./components/QuoteBox";
import Footer from './components/Footer';


function App() {
  const [quote, setQuote] = useState({})

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  //Fetching Quote Data from API

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random?minLength=100&maxLength=120')
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
      const data = await response.json()
      setQuote(data);
    } catch (err) {
        console.log(err);
        setQuote({content: 'Oops! Something went wrong.', author: 'Error Maker'});
      }
  }

  //Rendering

  return (
    <div className='App container-fluid text-center'>
      <main id='quote-box'>
        <QuoteBox quote={quote}/>
        <Buttons id='buttons' quote= {quote} onClick={fetchRandomQuote}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
