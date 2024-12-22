import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

interface HackathonCardProps {
  title: string;
  description: string;
  dates: string;
  image?: string;
  links?: readonly LinkProps[];
}

// Custom Avatar Component
const Avatar: React.FC<{ image?: string; alt: string }> = ({ image, alt }) => {
  return (
    <div className="w-12 h-12 border rounded-full flex items-center justify-center bg-gray-100">
      {image ? (
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain rounded-full"
        />
      ) : (
        <span className="text-xl font-bold">{alt[0]}</span>
      )}
    </div>
  );
};

// Custom Badge Component
const Badge: React.FC<{
  title: string;
  className?: string;
  children: ReactNode; // Added children to the props interface
}> = ({ children, title, className }) => {
  return (
    <span
      className={`px-2 py-1 text-sm rounded-full bg-blue-100 text-blue-700 ${className}`}
      title={title}
    >
      {children}
    </span>
  );
};

export const TimeLineCard: React.FC<HackathonCardProps> = ({
  title,
  description,
  dates,
  image,
  links,
}) => {
  return (
    <li className="list-none relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar image={image} alt={title} />
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && <time className="text-xs text-gray-500">{dates}</time>}
        <h2 className="font-semibold leading-none">{title}</h2>
        {description && (
          <span className="mt-0.5 text-sm text-gray-500">{description}</span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link to={link.href} key={idx}>
              <Badge title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
