import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Flashcard Fumble',
  description: 'Basic flashcard system created using React & Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav>
          <Link href="/">Home</Link>
          <br></br>
          <Link href="/cards">Cards</Link>
          <br></br>
          <Link href="/addCard">Add Card</Link>
          <br></br>
          <Link href="/testCards">Test Cards</Link>
          <br></br>
          <br></br>
        </nav>
        {children}
      </body>
    </html>
  );
}
