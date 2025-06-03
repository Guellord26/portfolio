import Link from "next/link";

export default function ArticleCard({ article }) {
  return (
    <div className="border rounded p-4 bg-white shadow">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {article.title}
      </h3>
      <p className="text-gray-600 mb-2">{article.excerpt}</p>
      <Link
        href={`/blog/${article.id}`}
        className="text-blue-600 font-medium hover:underline"
      >
        Lire l’article →
      </Link>
    </div>
  );
}
