import { notFound } from 'next/navigation';
import { allPosts, type Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
    };
  }

  return {
    title: `${post.title} | My Next.js Site`,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post: Post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
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
