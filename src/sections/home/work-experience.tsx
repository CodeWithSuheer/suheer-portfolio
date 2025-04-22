import BlurFade from "@/components/ui/blur-fade";
import { ResumeCard } from "../../components/ResumeCard";
import { SkillsSection } from "../../components/SkillsSection";
// images
import glowingsoft_logo from "../../assets/project_img/glowingsoft_logo.jpeg";
import it_experts_logo from "../../assets/project_img/it_experts_pakistan_logo.jpeg";
import octa_logo from "../../assets/project_img/octa_logo.webp";

export default function WorkExperience() {
  return (
    <>
      <main className="max-w-2xl mx-auto">
        <section className="w-full mt-6 sm:mt-14 px-4 sm:px-0">
          <div id="work">
            <BlurFade delay={0.6 * 2} inView>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Work Experience
              </h2>
            </BlurFade>
            <BlurFade delay={0.6 * 2} inView>
              <div className="flex min-h-0 flex-col gap-y-3">
                <ResumeCard
                  logoUrl={glowingsoft_logo}
                  altText="Company Logo"
                  title="Software Engineer"
                  subtitle="Glowingsoft Technologies"
                  href="/job/tech-company"
                  period=" September 2024 - Present"
                  description="Building and optimizing web applications using React and TypeScript. Enhancing user experiences with clean, efficient code and introducing new features to improve functionality."
                />
                <ResumeCard
                  logoUrl={octa_logo}
                  altText="Company Logo"
                  title="Software Engineer"
                  subtitle="Octa Tech Solution LLC"
                  href="/job/tech-company"
                  period="March 2024 - September 2024"
                  description="Worked on various web projects, focusing on performance optimization and feature development. Collaborated with teams to create seamless, user friendly applications."
                />
                <ResumeCard
                  logoUrl={it_experts_logo}
                  altText="Company Logo"
                  title="Software Engineer"
                  subtitle="IT-Experts"
                  href="/job/tech-company"
                  period="October 2023 - March 2024"
                  description="Developed and maintained interactive web applications. Improved code quality and contributed to scalable solutions for various client projects."
                />
              </div>
            </BlurFade>
          </div>
        </section>

        <section className="w-full mt-6 sm:mt-14 px-4 sm:px-0">
          <SkillsSection />
        </section>
      </main>
    </>
  );
}
