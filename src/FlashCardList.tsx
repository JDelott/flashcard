// src/components/FlashcardsList.tsx
import React from 'react';
import QuestionAnswer from './QuestionAnswer';

interface FlashcardsListProps {
  flashcards: { question: string; answer: string }[];
}

const FlashcardsList: React.FC<FlashcardsListProps> = ({ flashcards }) => {
  return (
    <div>
      {flashcards.map((flashcard, index) => (
        <QuestionAnswer key={index} question={flashcard.question} answer={flashcard.answer} />
      ))}
    </div>
  );
};

export default FlashcardsList;
