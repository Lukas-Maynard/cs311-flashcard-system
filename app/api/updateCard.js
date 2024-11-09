// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { id, understood } = req.body;
//     try {
//       await prisma.cards.update({
//         where: { id },
//         data: { understood },
//       });
//       res.status(200).json({ message: 'Card updated successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to update card' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
