'use client'; // Torna o componente um Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Hook para obter a rota atual

  return (
    <nav className="bg-black p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            href="/"
            className={`text-lg ${
              pathname === '/' ? 'text-red-600' : 'text-white'
            } hover:text-red-600`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={`text-lg ${
              pathname === '/portfolio' ? 'text-red-600' : 'text-white'
            } hover:text-red-600`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            className={`text-lg ${
              pathname === '/contato' ? 'text-red-600' : 'text-white'
            } hover:text-red-600`}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
