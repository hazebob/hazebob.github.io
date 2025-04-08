import Link from 'next/link';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <nav className="border-b dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            홈으로
          </Link>
          <Link 
            href="/article" 
            className="text-lg font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            아티클
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
} 
