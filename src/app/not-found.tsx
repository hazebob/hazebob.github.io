import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">페이지를 찾을 수 없습니다</p>
        <Link 
          href="/article" 
          className="text-blue-600 hover:underline"
        >
          아티클 목록으로 돌아가기 →
        </Link>
      </div>
    </div>
  )
} 
