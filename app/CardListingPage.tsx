import { useState, useEffect } from 'react';

type Card = {
  id: number;
  prompt: string;
  answer: string;
  understood: number;
  nextScheduledTime: string;
};

function CardListingPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch('/api/getCards');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Card[] = await response.json();
        setCards(data);
      } catch (err) {
        // Type assertion to specify that err is of type Error
        const errorMessage = (err as Error).message;
        setError(errorMessage);
      }
    };
    fetchCardData();
  }, []);

  return (
    <div>
      <h1>All Cards</h1>
      {error && <p>Error fetching cards: {error}</p>}
      <ul>
        {cards.map(card => (
          <li key={card.id}>
            {card.prompt} - {card.understood}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardListingPage;
