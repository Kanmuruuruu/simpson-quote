import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import QuoteCard from "./components/QuoteCard";
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState([]);
  useEffect((()=>{
    getCitations();
  }),[]);
  const getCitations = () => {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data[0]);
        setQuote(data[0]);
    });
  }
  
  return (
    <div className="App">
        <NavBar />
        <QuoteCard
            quote={quote.quote}
            character={quote.character}
            img={quote.image}
        />
        <button onClick={getCitations}>Click</button>
    </div>
  );
}

export default App;
