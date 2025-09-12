import { getDocuments } from "outstatic/server";
import { BlogList } from "./components/BlogList";

// Componente principal
export default async function BlogPage() {
  const posts = await getDocuments("blog", [
    "title",
    "coverImage",
    "description",
    "category",
    "author",
    "slug",
    "publishedAt",
  ]);

  // Extrai todas as categorias únicas
  const categories: { value: string; label: string }[] = Array.from(
    new Map(
      posts
        .flatMap((post) => (Array.isArray(post.category) ? post.category : []))
        .map((cat) => [cat.value, cat])
    ).values()
  );

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog - Minha Jóia SFC</h1>
      <BlogList posts={posts} categories={categories} />
    </section>
  );
}
