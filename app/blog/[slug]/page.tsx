import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return {
    title: data.title,
    date: data.date,
    contentHtml: processedContent.toString(),
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <article className="prose prose-invert">
      <h1>{post.title}</h1>

      <p>{post.date}</p>

      <div
        dangerouslySetInnerHTML={{
          __html: post.contentHtml,
        }}
      />
    </article>
  );
}
