import { getAllPosts, getPost } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="space-y-6">
      <div className="mt-8">
        <Link
          href="/blog"
          style={{
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "12px",
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          &lt; BACK
        </Link>
      </div>

      <article>
        <div className="nes-container with-title">
          <p className="title">{post.title}</p>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "11px",
              marginBottom: "24px",
              fontFamily: "monospace",
            }}
          >
            📅 {post.date}
          </p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      <div className="text-center">
        <Link href="/blog" className="nes-btn">
          返回文章列表
        </Link>
      </div>
    </div>
  );
}
