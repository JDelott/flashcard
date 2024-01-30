// src/components/QuestionAnswer.tsx
import React, { useState } from 'react';

interface QuestionAnswerProps {
  question: string;
  answer: string;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-answer" onClick={handleToggleAnswer}>
      <div className="question">
        <h2>{question}</h2>
      </div>
      <div className="answer">
        {showAnswer ? <p>{answer}</p> : <button>Show Answer</button>}
      </div>
    </div>
  );
};

export default QuestionAnswer;
