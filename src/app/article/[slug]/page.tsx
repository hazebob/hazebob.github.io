import { notFound } from 'next/navigation';
import { allPosts, type Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export async function generateStaticParams() {
  // 모든 포스트의 slug를 생성 (published 상태와 관계없이)
  return allPosts.map((post: Post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);
  
  if (!post || post.published === false) {
    return {
      title: '아티클을 찾을 수 없습니다',
    };
  }

  return {
    title: `${post.title} | My Next.js Site`,
    description: post.description,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);

  // 포스트가 없거나 published가 false인 경우 404 페이지로 이동
  if (!post || post.published === false) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-500 dark:text-gray-400">
          {post.formattedDate}
        </time>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <Content />
      </div>
    </article>
  );
} 
