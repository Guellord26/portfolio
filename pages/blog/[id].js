import Head from 'next/head'
import { useRouter } from "next/router";
import articles from "@/data/articles";


export default function Article({ article }) {
  const router = useRouter();

  if (router.isFallback) return <div>Chargement...</div>;
  if (!article) return <div>Article non trouvé.</div>;

  return (
    <>
     <Head>
        <title>{article.title} | Mon Blog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
      </Head>
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Publié le {article.date}</p>
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
    </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: articles.map((a) => ({ params: { id: a.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.id === params.id) || null;
  return {
    props: { article },
  };
}
