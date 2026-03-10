import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-6">
      <div className="mt-8">
        <h2 style={{ fontSize: "20px", color: "var(--pixel-green)", marginBottom: "8px" }}>
          BLOG
        </h2>
        <p style={{ color: "var(--text-muted)" }}>
          // 我写的文章，记录思考和折腾过程
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="nes-container">
          <p style={{ color: "var(--text-muted)" }}>
            还没有文章... 快去写第一篇吧！✏️
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="nes-container post-card" style={{ cursor: "pointer" }}>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        fontSize: "12px",
                        color: "var(--pixel-green)",
                        marginBottom: "8px",
                      }}
                    >
                      &gt; {post.title}
                    </h3>
                    {post.description && (
                      <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>
                        {post.description}
                      </p>
                    )}
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "11px",
                      color: "var(--text-muted)",
                      fontFamily: "monospace",
                    }}
                  >
                    {post.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
