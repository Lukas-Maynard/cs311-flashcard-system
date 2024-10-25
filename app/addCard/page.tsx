'use client';

import { useState } from 'react';

export default function AddCardForm() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const addCard = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/addCard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, answer }),
    });
    setPrompt('');
    setAnswer('');
  };

  return (
    <form onSubmit={addCard}>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Prompt"
        required
      />
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Answer"
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
}
