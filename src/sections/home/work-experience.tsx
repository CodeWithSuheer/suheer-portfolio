import { ResumeCard } from "../../components/ResumeCard";
import { SkillsSection } from "../../components/SkillsSection";

export default function WorkExperience() {
  return (
    <>
      <section className="w-full mt-6 sm:mt-14 px-4 sm:px-0">
        <div id="work">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Work Experience
          </h2>
          <div className="flex min-h-0 flex-col gap-y-3">
            <ResumeCard
              logoUrl="https://example.com/company-logo.png"
              altText="Company Logo"
              title="Software Engineer"
              subtitle="Glowingsoft Technologies"
              href="/job/tech-company"
              period=" September 2024 - Present"
              description="Developed and maintained various web applications using React and TypeScript. Implemented new features and optimized existing codebase for better performance."
            />
            <ResumeCard
              logoUrl="https://example.com/company-logo.png"
              altText="Company Logo"
              title="Software Engineer"
              subtitle="Octa Tech Solution LLC"
              href="/job/tech-company"
              period="March 2024 - September 2024"
              description="Developed and maintained various web applications using React and TypeScript. Implemented new features and optimized existing codebase for better performance."
            />
            <ResumeCard
              logoUrl="https://example.com/company-logo.png"
              altText="Company Logo"
              title="Software Engineer"
              subtitle="IT-Experts"
              href="/job/tech-company"
              period="March 2024 - September 2024"
              description="Developed and maintained various web applications using React and TypeScript. Implemented new features and optimized existing codebase for better performance."
            />
          </div>
        </div>
      </section>

      <section className="w-full mt-6 sm:mt-14 px-4 sm:px-0">
        <SkillsSection />
      </section>
    </>
  );
}
