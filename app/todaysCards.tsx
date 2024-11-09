import { useState } from 'react';
import { sql } from '@vercel/postgres';

export default async function TestCards() {
  const { rows } = await sql`SELECT * FROM cards WHERE nextScheduledTime < NOW()`;

  return (
    <div>
      <h1>Your current Cards</h1>
      {rows.length > 0 ? (
        rows.map((row) => (
          <Card key={row.id} prompt={row.prompt} answer={row.answer} />
        ))
      ) : (
        <p>You&apos;re done learning for now! No cards to view, Come back later.</p>
      )}
    </div>
  );
}

function Card({ prompt, answer }: { prompt: string; answer: string }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <p>{prompt}</p>
      {showAnswer && <p>{answer}</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide Answer' : 'Show Answer'}
      </button>
    </div>
  );
}
