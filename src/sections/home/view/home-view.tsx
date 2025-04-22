import HeroSection from "../hero-section";
import HomeProjects from "../home-projects";
import HomeContact from "../home-contact";
import HomeTimeline from "../home-timeline";
import WorkExperience from "../work-experience";
// import Scroller from "../scroller";

const HomeView = () => {
  return (
    <>
      <main className="">
        <div id="home"><HeroSection /></div>
        <div id=""><WorkExperience /></div>
        <div id="projects"><HomeProjects /></div>
        <div id="about"><HomeTimeline /></div>
        <div id="contact"><HomeContact /></div>
        {/* <div id=""><Scroller /></div> */}
      </main>
    </>
  );
};

export default HomeView;
