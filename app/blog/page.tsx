import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border border-zinc-800 p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>

            <p className="text-zinc-400">{post.date}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
