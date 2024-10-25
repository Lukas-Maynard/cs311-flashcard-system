"use client";
import Link from 'next/link';
import CardListingPage from './CardListingPage';
import AddCardPage from './addCard/page';

export default function HomePage(){
  return (
    <div>
      <h1>Welcome to Flashcard App</h1>
      {/* <Link href="/">Home</Link>
      <br></br>
      <Link href="/cards">Go to Card Listing</Link>
      <br></br>
      <Link href="/addCard">Add Cards</Link> */}

      <br></br>
      <br></br>
      <CardListingPage/>
      <br></br>
      <AddCardPage/>
    </div>
  );
}
