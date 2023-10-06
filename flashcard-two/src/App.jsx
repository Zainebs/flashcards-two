import React, { useState, useEffect } from 'react';
import './App.css';
import FlashCard from './Components/FlashCard'; // Correct relative path
import Description from './Components/Description.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <div className = "title-container">
        <h1 className = "title">"Women in Stem trivia" </h1>
        <p> "Let's test how much you know about women in stem and computer science in general?"</p>
        <p>Total Cards: {Description.length}</p>
      </div> 
      <FlashCard/>
      </div>
  )
}

export default App;