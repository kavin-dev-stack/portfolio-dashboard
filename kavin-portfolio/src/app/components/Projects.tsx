import MotionWrapper from "../components/MotionWrapper";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="container py-20">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <MotionWrapper
            key={proj.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{proj.name}</h3>
              <p className="text-gray-700 mt-2">{proj.description}</p>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
