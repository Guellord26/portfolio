import articles from "@/data/articles";
// import ArticleCard from "@/components/ArticleCard";
import dynamic from 'next/dynamic'



export default function Blog() {
  const ArticleCard = dynamic(() => import('@/components/ArticleCard'), {
  loading: () => <p>Chargement…</p>,
  ssr: false,
})
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>

      <div className="space-y-6">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
