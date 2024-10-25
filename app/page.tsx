"use client";
import CardListingPage from './CardListingPage';
import AddCardPage from './addCard/page';

export default function HomePage(){
  return (
    <div>
      <h1>Welcome to Flashcard App</h1>
      <br></br>
      <CardListingPage/>
      <br></br>
      <AddCardPage/>
    </div>
  );
}
