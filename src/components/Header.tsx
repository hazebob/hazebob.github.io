import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >
          My Blog
        </Link>
        <nav className="flex gap-4">
          <Link 
            href="/article" 
            className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            아티클
          </Link>
          <Link 
            href="/about" 
            className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
} 
