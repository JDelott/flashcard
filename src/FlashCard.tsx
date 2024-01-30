// src/components/Flashcard.tsx
import React, { useState } from 'react';

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
      <div className="question">
        <h2>{question}</h2>
      </div>
      {showAnswer && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Flashcard;
