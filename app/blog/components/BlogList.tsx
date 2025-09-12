"use client";
import { Image } from "@heroui/image";
import Link from "next/link";
import { useState } from "react";

export function BlogList({
  posts,
  categories,
}: {
  posts: any[];
  categories: any[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? posts.filter((post) =>
        (Array.isArray(post.category) ? post.category : []).some(
          (cat: { value: string }) => cat.value === selectedCategory
        )
      )
    : posts;

  return (
    <>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
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
            <div className="flex items-center gap-2 mb-4">
              {(Array.isArray(post.category) ? post.category : []).map(
                (cat: { value: string; label: string }) => (
                  <span
                    key={cat.value}
                    className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {cat.label}
                  </span>
                )
              )}
            </div>
            <p className="text-gray-600 mb-4">{post.author?.name}</p>
            <span className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

function CategoryFilter({
  categories,
  selected,
  onSelect,
}: {
  categories: { value: string; label: string }[];
  selected: string | null;
  onSelect: (cat: string | null) => void;
}) {
  return (
    <div className="mb-8 flex gap-2 flex-wrap">
      <button
        className={`px-3 py-1 rounded ${selected === null ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => onSelect(null)}
      >
        Todas
      </button>
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`px-3 py-1 rounded ${selected === cat.value ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => onSelect(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
