export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hello!
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
