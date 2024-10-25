// pages/api/getCards.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  
  console.log('API called'); 

  if (req.method === 'GET') {
    try {
      const cards = await prisma.card.findMany();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cards' });
      console.log(error)
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
