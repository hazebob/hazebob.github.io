import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[url('/images/bg1.jpg')] bg-cover bg-top text-white">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-semibold hover:text-gray-200 transition-colors"
        >
          heem.net
        </Link>
        <nav className="flex gap-4">
          <Link 
            href="/article" 
            className="text-lg font-semibold hover:text-gray-200 transition-colors"
          >
            article
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-semibold hover:text-gray-200 transition-colors"
          >
            about
          </Link>
        </nav>
      </div>
    </header>
  );
} 
