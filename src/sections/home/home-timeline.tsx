import { TimeLineCard } from "../../components/TimeLineCard";

export default function HomeTimeline() {
  const timeLinedata = [
    {
      title: "E-Commerce Platform",
      dates: "November 23rd - 25th, 2018",
      description:
        "Built online stores that make buying and selling easier, with features like product catalogs, carts, and secure payments.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "POS Systems",
      dates: "September 14th - 16th, 2018",
      description:
        "Developed point-of-sale systems to help small businesses manage sales, inventory, and reports effortlessly.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Landing Pages",
      dates: "March 23rd - 24th, 2018",
      description:
        "Created tailored tools, like CRMs and task managers, to solve unique business problems and boost productivity.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "Custom Platforms",
      dates: "March 23rd - 24th, 2018",
      description:
        "Designed beautiful, responsive landing pages that grab attention and turn visitors into customers.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ];

  return (
    <section className="px-4 sm:px-0">
      <div className="space-y-12 w-full py-12">
        <div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-start sm:text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                I Love Building Scalable Solutions
              </h2>
              <p className="text-[16px] text-gray-700">
                I’m a passionate MERN Stack Developer with experience building
                innovative web apps, including e-commerce platforms, POS
                systems, small-scale tools, and responsive landing pages.
              </p>
            </div>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </section>
  );
}
