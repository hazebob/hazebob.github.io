export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-700">
            문윤기(Bob).
            <br/>
            대한민국에 사는 프론트엔드 개발자. 세 아이의 아빠.
            <br/>
            - Grepp(2022 ~ 현재)
            <br/>
            - Stibee(2017 ~ 2022)
            <br/>
            - Slowalk(2013 ~ 2017)
            <br/>
            - Webactually(2012 ~ 2013)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <div className="flex flex-col space-y-2">
            <a 
              href="https://x.com/hazebob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              X (Twitter)
            </a>
            <a 
              href="mailto:bob@heem.net"
              className="text-blue-600 hover:underline"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
} 
