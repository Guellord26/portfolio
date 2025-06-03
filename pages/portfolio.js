import projects from "@/data/projects";
// import ProjectCard from "@/components/ProjectCard";
import dynamic from 'next/dynamic'

const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
  ssr: false,
  loading: () => <p>Chargement…</p>,
})

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mes projets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
