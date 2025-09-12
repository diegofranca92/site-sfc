import { Image } from "@heroui/image";
import { notFound } from "next/navigation";
import { getDocumentBySlug } from "outstatic/server";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getDocumentBySlug("blog", params.slug, [
    "title",
    "content",
    "publishedAt",
    "author",
    "coverImage",
  ]);

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.author?.name}</p>
      <Image src={post.coverImage} />
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
      </p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
