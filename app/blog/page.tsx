import { Image } from "@heroui/image";
import Link from "next/link";
import { getDocuments } from "outstatic/server";

export default async function BlogPage() {
  const posts = await getDocuments("blog", [
    "title",
    "coverImage",
    "description",
    "author",
    "slug",
    "publishedAt",
  ]);

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog - Minha Jóia SFC</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="rounded-xl shadow-lg border p-6 hover:shadow-xl transition"
          >
            <Image src={post.coverImage} />
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <p className="text-gray-600 mb-4">{post.author?.name}</p>
            <span className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
