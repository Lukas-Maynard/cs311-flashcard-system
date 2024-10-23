"use client";
import Link from 'next/link';
import CardListingPage from './CardListingPage';
import TestPage from './test';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Flashcard App</h1>
      <Link href="/">Home</Link>
      <br></br>
      <Link href={"/cards"}>Go to Card Listing</Link>
      <br></br>
      <Link href="/test">Test page please work why is this not working?????????</Link>

      <br></br>
      <br></br>
      <CardListingPage />
      <br></br>
      <br></br>
      <TestPage/>
      {/* The pages are clearly in working order why can I not navigate to them */}
    </div>
  );
}
