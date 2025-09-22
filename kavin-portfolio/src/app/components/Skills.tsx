import MotionWrapper from "../components/MotionWrapper";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="container py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <MotionWrapper
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium cursor-pointer transition"
          >
            {skill}
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
