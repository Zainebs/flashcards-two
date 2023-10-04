import React, { useState } from 'react';
import '../app.css'
const Guess = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
  };

  return (
    <div className={`guess ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-front" onClick={flipCard}>
        <p>{question}</p>
      </div>
      <div className="card-back" onClick={flipCard}>
        <p>{isFlipped ? answer : 'Click to reveal answer'}</p>
      </div>
      <input
        type="text"
        placeholder="Type your guess..."
        value={userGuess}
        onChange={handleGuessChange}
        className="textbox"
      />
    </div>
  );
};

export default Guess;

