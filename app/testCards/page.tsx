// pages/testCards.tsx

import { sql } from '@vercel/postgres';

export default async function TestCards() {
  const { rows } = await sql`SELECT * FROM cards`; // Adjust table name if necessary

  return (
    <div>
      <h1>Test Cards</h1>
      {rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.prompt} - {row.answer} - {row.understood}%
          </div>
        ))}
    </div>
  );
}
