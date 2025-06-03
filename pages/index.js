import Link from "next/link";
import Image from 'next/image'
// import heroImage from '@/public/hero.jpg'
import Informatique_gestion from '@/public/images/Informatique_gestion_2.jpg'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 px-10">
       <Image
        src={Informatique_gestion}
        alt="Image d'accueil"
        width={600}
        height={300}
        className="rounded shadow"
        priority
      />
      <div className="text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Salut, je suis <span className="text-blue-600">Guellord Mbiya</span>{" "}
          👋
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Développeur web fullstack passionné. Je construis des sites modernes
          avec Next.js, React & TailwindCSS.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/portfolio"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Voir mes projets
          </Link>
          <Link
            href="/blog"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300 transition"
          >
            Lire le blog
          </Link>
        </div>
      </div>
    </div>
  );
}
