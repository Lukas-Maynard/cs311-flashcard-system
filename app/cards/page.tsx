import { sql } from '@vercel/postgres';

export default async function AllCardsPage() {
  const { rows } = await sql`SELECT * FROM cards`;

  return (
    <div>
      <h1>Test Cards</h1>
      {rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.prompt} - {row.answer} - %{row.understood}
          </div>
        ))}
    </div>
  );
}
