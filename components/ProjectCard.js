import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
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
