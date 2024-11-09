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
      <body className="antialiased bg-gray-100 text-gray-900">
        <nav className="bg-blue-600 p-4 shadow-md">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cards" className="text-white hover:text-yellow-300">
                Cards
              </Link>
            </li>
            <li>
              <Link href="/addCard" className="text-white hover:text-yellow-300">
                Add Card
              </Link>
            </li>
          </ul>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
