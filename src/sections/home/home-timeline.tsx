import WordPullUp from "@/components/ui/word-pull-up";
import { TimeLineCard } from "../../components/TimeLineCard";
import BlurFade from "@/components/ui/blur-fade";
import palatoFav from "../../assets/project_img/palatoFav.png";
import nailaLogo from "../../assets/project_img/nailaLogo.png";
import brandrscoLogo from "../../assets/project_img/brandrscoLogo.png";

export default function HomeTimeline() {
  const timeLinedata = [
    {
      title: "Palato - Admin Dashboard",
      dates: "December 10, 2024 - February 12, 2025",
      description: "Developed an admin dashboard to manage restaurant operations, track orders, and update menus efficiently.",
      image: palatoFav,
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Naila Arts - POS Platform",
      dates: "August 30, 2024 - October 26, 2024",
      description: "Created a POS system for processing sales, managing inventory, and generating business reports.",
      image: nailaLogo,
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "BrandrsCo",
      dates: "July 14, 2024 - July 20, 2024",
      description: "Designed a landing page to showcase the brand's services, attract customers, and boost online presence.",
      image: brandrscoLogo,
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ];
  

  return (
    <section className="px-4 sm:px-0">
      <div className="space-y-12 w-full py-12">
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-start sm:text-center">
              <WordPullUp
                className="text-3xl sm:text-4xl text-start sm:text-center font-bold tracking-[-0.02em] text-black md:leading-[5rem]"
                words="I Love Building Scalable Solutions"
              />
              {/* <h2 className="font-bold text-3xl sm:text-4xl">
                I Love Building Scalable Solutions
              </h2> */}
              <BlurFade delay={0.35} inView>
                <p className="text-[15px] sm:text-[16px] text-gray-700">
                  I'm a passionate MERN Stack Developer with experience building
                  innovative web apps, including e-commerce platforms, POS
                  systems, small-scale tools, and responsive landing pages.
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
        <div>
          <BlurFade delay={0.45} inView>
            <div className="mb-4 ml-4 divide-y divide-dashed border-l">
              {timeLinedata.map((project, id) => (
                <div key={id}>
                  <TimeLineCard
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
