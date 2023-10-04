import React, { useState, useEffect } from 'react';
import '../App.css';
import Description from './Descriptionjsx'; // Use your 'Description' array
import Guess from './guess.jsx'; // Import the Guess component

const FlashCard = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);

  const showPreviousCard = () => {
    if (isShuffled) {
      // If shuffled, show a random card
      showRandomCard();
    } else {
      // If not shuffled, go to the previous card
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    }
  };

  const showNextCard = () => {
    if (isShuffled) {
      // If shuffled, show a random card
      showRandomCard();
    } else {
      // If not shuffled, go to the next card
      if (currentCardIndex < Description.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }
    }
  };

  const showRandomCard = () => {
    const randomCardIndex = Math.floor(Math.random() * Description.length);
    setCurrentCardIndex(randomCardIndex);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  useEffect(() => {
    // Initialize the component by setting the first card
    setCurrentCardIndex(0);
    console.log(Description);
    console.log(currentCardIndex);
  }, []);

  return (
    <div>
      <div className="buttons">
        <button onClick={showPreviousCard}>&#8592;</button> {/* Left arrow */}
        <button onClick={showNextCard}>&#8594;</button> {/* Right arrow */}
      </div>
      <button onClick={toggleShuffle}>Shuffled Cards</button>
      <Guess
        question={Description[currentCardIndex].question}
        answer={Description[currentCardIndex].answer}
      />
    </div>
  );
};

export default FlashCard;

