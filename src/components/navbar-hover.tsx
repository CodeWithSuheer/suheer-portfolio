import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  let links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Snippets",
      link: "#snippets",
    },
    {
      name: "About",
      link: "#about",
    },
  ];

  return (
    <div className="py-1 px-5 flex space-x-4 justify-center border border-gray-200 rounded-2xl shadow-sm">
      {links.map((navLink, index) => (
        <Link key={navLink.name} to={navLink.link}>
          <a
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl px-2 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
          >
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.span
                  className="absolute inset-0 rounded-sm bg-gray-100"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <span className="relative z-10 text-[13px] font-medium text-gray-600">
              {navLink.name}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
}