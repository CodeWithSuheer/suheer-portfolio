import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard: React.FC<ResumeCardProps> = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  period,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      to={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex bg-white dark:bg-gray-800">
        <div className="flex-none">
          <div className="w-12 h-12 rounded-full border bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img
              src={logoUrl}
              alt={altText}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex-grow ml-4 flex flex-col group">
          <div className="mb-2">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-[15px]">
                {title}
                {description && (
                  <RiArrowRightSLine
                    className={`w-5 h-5 ml-1 transform font-normal transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${
                      isExpanded ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </h3>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-[14px] mt-0">{subtitle}</div>
            )}
          </div>
          {description && (
            <div
              className={`mt-2 text-xs sm:text-sm overflow-hidden transition-all duration-700 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-2">{description}</p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
