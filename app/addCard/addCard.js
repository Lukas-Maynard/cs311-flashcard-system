import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { prompt, answer } = req.body;

    const card = await prisma.card.create({ data: { prompt, answer, nextScheduledTime: new Date() } });
    res.json(card);
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
