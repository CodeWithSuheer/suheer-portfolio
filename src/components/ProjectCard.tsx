import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  websiteLink?: string;
  image?: any;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  dates,
  technologies,
  websiteLink,
  image,
  className,
}: Props) {
  return (
    <div
      className={`flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg bg-white dark:bg-gray-800 ${className}`}
    >
      <a
        href={websiteLink || "#"}
        target="_blank"
        className="block cursor-pointer"
      >
        {image && (
          <img
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-44 w-full overflow-hidden object-cover"
          />
        )}
      </a>
      <div className="px-4 pt-2 pb-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-[12px] text-black font-medium">{dates}</p>
          <p className="text-[13px] text-gray-600">{description}</p>
          <div className="pt-1 pb-1.5 flex justify-start items-center flex-wrap gap-x-2 gap-y-2">
            {technologies?.map((technologies, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-gray-800 bg-gray-200 rounded text-xs"
              >
                {technologies}
              </span>
            ))}
          </div>
          <div className="button w-full">
            <Link
              to={websiteLink || "#"}
              type="button"
              className="flex w-24 items-center gap-x-2 justify-center px-3 py-1.5 bg-gray-800 text-white rounded-md text-xs"
            >
              Website <HiMiniArrowTopRightOnSquare size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
