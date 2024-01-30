import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlashcardsList from './FlashCardList';
import './App.css';

interface Flashcard {
  question: string;
  answer: string;
}

const App: React.FC = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [subject, setSubject] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
  'https://api.openai.com/v1/chat/completions',
  {
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: `Generate flashcard for ${subject}` },
    ],
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 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',
    },
  }
);

      const generatedContent = response.data.choices[0]?.text || ''; // Example extraction, adjust based on OpenAI API response structure
      const parsedContent = JSON.parse(generatedContent);

      const generatedFlashcards: Flashcard[] = [
        {
          question: parsedContent.question,
          answer: parsedContent.answer,
        },
      ];

      setFlashcards((prevFlashcards) => [...prevFlashcards, ...generatedFlashcards]);
    } catch (error) {
      console.error('Error fetching data from OpenAI API:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleGenerateFlashcards = () => {
    if (subject.trim() !== '') {
      fetchData();
    }
  };

  useEffect(() => {
    if (flashcards.length > 0) {
      // Additional logic or UI updates after flashcards are generated
    }
  }, [flashcards]);

  return (
    <>
      <h1>Flashcard App</h1>
      <div>
        <label>
          Subject:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
        <button onClick={handleGenerateFlashcards} disabled={loading}>
          Generate Flashcards
        </button>
      </div>
      {loading && <p>Loading...</p>}
      <FlashcardsList flashcards={flashcards} />
    </>
  );
};

export default App;
