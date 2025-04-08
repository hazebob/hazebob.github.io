import Link from 'next/link';
import { allPosts, type Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

export const metadata = {
  title: '아티클 | My Next.js Site',
  description: '프로그래밍과 개발에 대한 이야기를 공유합니다.',
}

export default function ArticlePage() {
  const posts = allPosts
    .filter((post: Post) => post.published !== false)
    .sort((a: Post, b: Post) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );

  return (
    <div className="max-w-4xl mx-auto pb-8">
      <h1 className="text-[200px] font-bold text-center relative top-[-120px] rotate-[-180deg]">article</h1>
      <div className="grid gap-8">
        {posts.map((post: Post) => (
          <article 
            key={post._id} 
            className="p-6 rounded-lg border border-gray-300  hover:border-gray-300 transition-colors"
          >
            <Link href={post.url} className="block">
              <time className="text-sm text-gray-500 ">
                {post.formattedDate}
              </time>
              <h2 className="text-2xl font-semibold mt-2 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-600 ">
                {post.description}
              </p>
              <div className="mt-4 text-sm text-[#143739]">
                read more →
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 
