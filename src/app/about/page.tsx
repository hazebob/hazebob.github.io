export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            안녕하세요! 저는 프론트엔드 개발자입니다.
            사용자 경험을 개선하고 아름다운 인터페이스를 만드는 것을 좋아합니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col space-y-2">
            <a 
              href="https://x.com/hazebob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              X (Twitter)
            </a>
            <a 
              href="mailto:bob@heem.net"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 
