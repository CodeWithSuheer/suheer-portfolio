import { FaLaptopCode } from "react-icons/fa";
import { CardHoverEffect } from "../../components/cardHoverEffect";
import { ProjectCard } from "../../components/ProjectCard";

import forYourBeauty from "../../assets/project_img/forYourBeauty.png";
import brandrsCo from "../../assets/project_img/brandrsCo.png";
import octaTech from "../../assets/project_img/octaTech.png";
import googly from "../../assets/project_img/googly.png";

// const projects = [
//   {
//     title: "For Your Beauty",
//     url: "https://foryourbeauty.shop",
//     description:
//       "Explore our collection of beauty services and products, designed to help you look and feel your best.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
//   {
//     title: "Octa Tech Solution LLC",
//     url: "https://www.octatechsolution.com",
//     description:
//       "Efficiently manage your time and schedule with our powerful time management tools.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
//   {
//     title: "Naila Arts",
//     url: "https://nailaarts.com",
//     description:
//       "Elevate your brand with our innovative branding solutions and strategies.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
//   {
//     title: "The Brandrsco",
//     url: "https://thebrandrsco.com",
//     description:
//       "Elevate your brand with our innovative branding solutions and strategies.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
//   {
//     title: "Studywello",
//     url: "https://studywello.com",
//     description:
//       "Empower your learning journey with our comprehensive educational tools and resources.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
//   {
//     title: "Royal Umrah Taxi",
//     url: "https://royalumrahtaxi.com",
//     description:
//       "Empower your learning journey with our comprehensive educational tools and resources.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
// ];

const projects = [
  {
    title: "For Your Beauty",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://foryourbeauty.shop",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node js",
      "MongoDB",
      "Redux Toolkit",
    ],
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
    image: forYourBeauty,
  },
  {
    title: "Octa Tech Solutions",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://www.octatechsolution.com",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
    image: octaTech,
  },
  {
    title: "Brandrs Co",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://thebrandrsco.com",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
    image: brandrsCo,
  },
  {
    title: "Googly",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://googly-smart.com",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node js",
      "MongoDB",
      "Redux Toolkit",
    ],
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
    image: googly,
  },
  // {
  //   title: "StudyWello",
  //   dates: "Jan 2024 - Feb 2024",
  //   websiteLink: "https://studywello.com",
  //   technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
  //   description:
  //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
  //   image: googly,
  // },
];

const upcomingProjects = [
  {
    title: "For Your Beauty",
    url: "https://foryourbeauty.shop",
    description:
      "Explore our collection of beauty services and products, designed to help you look and feel your best.",
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
  },
  {
    title: "Octa Tech Solution LLC",
    url: "https://www.octatechsolution.com",
    description:
      "Efficiently manage your time and schedule with our powerful time management tools.",
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
  },
  {
    title: "Naila Arts",
    url: "https://nailaarts.com",
    description:
      "Elevate your brand with our innovative branding solutions and strategies.",
    icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
  },
];

const HomeProjects = () => {
  return (
    <>
      {/* Projects */}
      <section className="w-full mt-14">
        <h2 className="mb-3 text-2xl font-bold">Projects</h2>
        <div className="content max-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                dates={project.dates}
                technologies={project.technologies}
                websiteLink={project.websiteLink}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="w-full mt-10">
        <h2 className="mb-3 text-2xl font-bold">Upcoming Projects</h2>
        <div className="content max-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
            {upcomingProjects?.map((card, index) => (
              <CardHoverEffect
                key={index}
                url={card.url}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
