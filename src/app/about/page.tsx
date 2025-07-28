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
            <h4>Work Experience</h4>
            <ul>
              <li>Grepp(2022 ~ 현재)</li>
              <li>Stibee(2017 ~ 2022)</li>
              <li>Slowalk(2013 ~ 2017)</li>
              <li>Webactually(2012 ~ 2013)</li>
            </ul>
            <h4>Mentor/Lecturer</h4>
            <ul>
              <li>KDT Full Cycle Dev Course - Grepp(2022 ~ 현재)</li>
              <li>KDT Full Cycle Dev Course React Part - Grepp(2022)</li>
              <li>개인 멘토링 - Inflearn (2023 ~ 현재)</li>
              <li>vue.js 강의 - Grepp(2021)</li>
            </ul>
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
