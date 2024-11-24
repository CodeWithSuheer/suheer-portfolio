import HeroSection from "../hero-section";
import HomeProjects from "../home-projects";
// import HomeContact from "../home-contact";
// import HomeEducation from "../home-education";
// import HomeTimeline from "../home-timeline";

const HomeView = () => {
  return (
    <>
      <main className="max-w-2xl mx-auto">
        <HeroSection />
        <HomeProjects />
        {/* <HomeEducation />
        <HomeTimeline />
        <HomeContact /> */}
      </main>
    </>
  );
};

export default HomeView;
