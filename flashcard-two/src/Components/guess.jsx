import React, { useState, useEffect } from 'react';
import Description from './Description'; // Import the array
import '../App.css'; // Import your CSS file with styles for correct and incorrect classes

const Guess = () => {
  const [shuffledDescription, setShuffledDescription] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isGuessCorrect, setIsGuessCorrect] = useState(null);

  useEffect(() => {
    setShuffledDescription([...Description]);
  }, []);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleGuessChange = (e) => {
    setUserGuess(e.target.value);
    setIsGuessCorrect(null);
  };

  const shuffleDescription = () => {
    const shuffled = [...shuffledDescription];
    let j = Math.floor(Math.random() * shuffled.length);
    setShuffledDescription(shuffled);
    setCurrentIndex(j);
    setIsFlipped(false);
    setIsGuessCorrect(null);
  };

  const revealAnswer = () => {
    setIsFlipped(true);
  };

  const revealQuestion = () => {
    setIsFlipped(false);
  };

  const checkGuess = () => {
    const userGuessLowerCase = userGuess.trim().toLowerCase();
    const answerLowerCase = shuffledDescription[currentIndex].Answer.toLowerCase();
  
    if (answerLowerCase.includes(userGuessLowerCase)) {
      setIsGuessCorrect(true);
    } else {
      setIsGuessCorrect(false);
    }
  };

  const nextDescription = () => {
    if (currentIndex < shuffledDescription.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setIsGuessCorrect(null);
    }
  };

  const prevDescription = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setIsGuessCorrect(null);
    }
  };

  return (
    <div>
      {shuffledDescription.length > 0 && (
        <div className={`guess ${isFlipped ? 'flipped' : ''}`}>
          <div className={`card-front ${isGuessCorrect === false ? 'incorrect' : isGuessCorrect === true ? 'correct' : ''}`} onClick={isFlipped ? revealQuestion : revealAnswer}>
            <p>{isFlipped ? shuffledDescription[currentIndex].Answer : shuffledDescription[currentIndex].Question}</p>
          </div>
          <input
            type="text"
            placeholder="Type your guess..."
            value={userGuess}
            onChange={handleGuessChange}
            className="textbox"
          />
          <button onClick={checkGuess}>Submit</button>
        </div>
      )}
      <div className="buttons">
        <button onClick={prevDescription}>&#8592;</button>
        <button onClick={nextDescription}>&#8594;</button>
      </div>
      <button onClick={shuffleDescription}>Shuffle</button>
    </div>
  );
};

export default Guess;
