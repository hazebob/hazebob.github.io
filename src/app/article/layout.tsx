export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex-1 max-w-4xl mx-auto py-8 px-4 min-h-[800px] overflow-hidden">
        {children}
      </main>
    </>
  );
} 
