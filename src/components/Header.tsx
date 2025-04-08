import Link from 'next/link';
interface HeaderProps {
  bgImage: number;
}

export default function Header({ bgImage }: HeaderProps) {
  return (
    <header 
      className="bg-cover bg-top text-white"
      style={{ backgroundImage: `url('/images/bg${bgImage}.jpg')` }}
    >
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
