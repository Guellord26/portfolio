import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MonPortfolio
        </Link>
        <div className="space-x-4 text-gray-700">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <Link href="/portfolio">Projets</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
