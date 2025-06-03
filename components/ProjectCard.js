import Link from "next/link";
import Image from 'next/image'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <Image
        priority
        src="/images/Informatique_gestion_1.jpg"
        alt={project.title}
        width={600}
        height={300}
        className="w-full h-48 object-cover shadow-md mb-6 md:mb-0"
       
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
        <Link
          href={project.link}
          className="text-blue-600 font-medium hover:underline"
          target="_blank"
        >
          Voir le projet →
        </Link>
      </div>
    </div>
  );
}
