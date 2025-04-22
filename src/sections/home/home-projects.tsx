// import { FaLaptopCode } from "react-icons/fa";
// import { CardHoverEffect } from "../../components/cardHoverEffect";
import { ProjectCard } from "../../components/ProjectCard";

import forYourBeauty from "../../assets/project_img/forYourBeauty.png";
import brandrsCo from "../../assets/project_img/brandrsCo.png";
import accounty from "../../assets/project_img/accounty.png";
import googly from "../../assets/project_img/googly.png";
import timezzi from "../../assets/project_img/timezzi.png";
import palato from "../../assets/project_img/palato.png";
import naila from "../../assets/project_img/naila.png";
import angels from "../../assets/project_img/angels.png";

const projects = [
  {
    title: "For Your Beauty",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://foryourbeauty.shop",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node js",
      "MongoDB",
      "Redux Toolkit",
    ],
    description:
      "An online store for beauty products with easy browsing and checkout features.",
    image: forYourBeauty,
  },
  {
    title: "Palato",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://venue.palatoapp.com",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Node js",
      "MongoDB",
      "RTK",
    ],
    description:
      "An admin dashboard for managing restaurant data, orders, and menus.",
    image: palato,
  },
  {
    title: "Accounty",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://app.accounty.ch",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Node js",
      "MongoDB",
      "RTK",
    ],
    description: "An admin dashboard for managing accounts data & tax.",
    image: accounty,
  },
  {
    title: "Angelsbond",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://www.angelsbond.com",
    technologies: [
      "React",
      "JavaScript",
      "Material UI",
      "Node js",
      "MongoDB",
      "RTK",
    ],
    description: "A dashboard for building new connections.",
    image: angels,
  },
  {
    title: "Timezzi",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://www.timezzi.com",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Node js",
      "MongoDB",
      "Redux Toolkit",
    ],
    description:
      "An admin dashboard to track tasks, schedules, and team performance.",
    image: timezzi,
  },
  {
    title: "Brandrs Co",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "https://thebrandrsco.com",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
    description:
      "A landing page designed to highlight brand identity and attract customers.",
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
      "An online shopping platform with product listings and order management.",
    image: googly,
  },
  {
    title: "Naila Arts",
    dates: "Jan 2024 - Feb 2024",
    websiteLink: "#",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Node js",
      "MongoDB",
      "Redux Toolkit",
    ],
    description:
      "A POS system for handling sales, inventory, and customer management.",
    image: naila,
  },
];

// const projects = [
//   {
//     title: "For Your Beauty",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://foryourbeauty.shop",
//     technologies: [
//       "React",
//       "TypeScript",
//       "Tailwind",
//       "Node js",
//       "MongoDB",
//       "Redux Toolkit",
//     ],
//     description:
//       "An online store for beauty products with easy browsing and checkout features.",
//     image: forYourBeauty,
//   },
//   {
//     title: "Palato",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://venue.palatoapp.com",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Material UI",
//       "Node js",
//       "MongoDB",
//       "RTK",
//     ],
//     description:
//       "An admin dashboard for managing restaurant data, orders, and menus.",
//     image: palato,
//   },
//   {
//     title: "Naila Arts",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://nailaarts.com",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Tailwind",
//       "Node js",
//       "MongoDB",
//       "Redux Toolkit",
//     ],
//     description:
//       "A POS system for handling sales, inventory, and customer management.",
//     image: naila,
//   },
//   {
//     title: "Timezzi",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://www.timezzi.com",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Tailwind",
//       "Node js",
//       "MongoDB",
//       "Redux Toolkit",
//     ],
//     description:
//       "An admin dashboard to track tasks, schedules, and team performance.",
//     image: timezzi,
//   },
//   {
//     title: "Octa Tech Solutions",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://www.octatechsolution.com",
//     technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
//     description:
//       "A landing page designed to highlight brand identity and attract customers.",
//     image: octaTech,
//   },
//   {
//     title: "Brandrs Co",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://thebrandrsco.com",
//     technologies: ["React", "JavaScript", "Tailwind CSS", "Redux Toolkit"],
//     description:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
//     image: brandrsCo,
//   },
//   {
//     title: "Googly",
//     dates: "Jan 2024 - Feb 2024",
//     websiteLink: "https://googly-smart.com",
//     technologies: [
//       "React",
//       "JavaScript",
//       "Tailwind CSS",
//       "Node js",
//       "MongoDB",
//       "Redux Toolkit",
//     ],
//     description:
//       " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque   magnam expedita cupiditate officia dignissimos ",
//     image: googly,
//   },
// ];

// const upcomingProjects = [
//   {
//     title: "Something Cool",
//     url: "#",
//     description:
//       "A new innovative project that will revolutionize the industry.",
//     icon: <FaLaptopCode className="h-8 w-8 text-gray-500" />,
//   },
// ];

const HomeProjects = () => {
  return (
    <>
      {/* Projects */}
      <main className="max-w-2xl mx-auto">
        <section className="w-full mt-14 px-4 sm:px-0">
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
      </main>

      {/* Upcoming Projects */}
      {/* <section className="w-full mt-10 px-4 sm:px-0">
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
      </section> */}
    </>
  );
};

export default HomeProjects;
