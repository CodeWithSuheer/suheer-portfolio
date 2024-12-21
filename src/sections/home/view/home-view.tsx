import HeroSection from "../hero-section";
import HomeProjects from "../home-projects";
// import HomeContact from "../home-contact";
// import HomeEducation from "../home-education";
import HomeTimeline from "../home-timeline";
import WorkExperience from "../work-experience";

const HomeView = () => {
  return (
    <>
      <main className="max-w-2xl mx-auto">
        <HeroSection />
        <WorkExperience />
        <HomeProjects />
        {/* <HomeEducation /> */}
        <HomeTimeline />
        {/* <HomeContact /> */}
      </main>
    </>
  );
};

export default HomeView;
