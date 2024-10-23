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

  useEffect(() => {
    const fetchCardData = async () => {
        const response = await fetch("/data.json");
        const data: Card[] = await response.json();
        setCards(data);
    };
    fetchCardData();
  }, []);

  return (
    <div>
      <h1>All Cards</h1>
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
