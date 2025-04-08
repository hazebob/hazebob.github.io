export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </>
  );
} 
