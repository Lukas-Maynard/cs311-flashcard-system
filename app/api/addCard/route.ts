import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { prompt, answer } = await req.json();
    const card = await prisma.cards.create({
      data: { prompt, answer},
    });
    return NextResponse.json(card);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add card' }, { status: 500 });
  }
}
