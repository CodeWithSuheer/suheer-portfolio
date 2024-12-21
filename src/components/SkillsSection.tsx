export const SkillsSection = () => {
  // Group skills by category
  const skillGroups = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Postgres",
    "MongoDB",
    "Jest",
    "Cypress",
    "Docker",
    "AWS",
    "CI/CD",
  ];

  return (
    <section className="w-full mt-6 sm:mt-14 px-5 sm:px-0">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Skills
      </h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {skillGroups.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-800 text-white rounded-lg text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
