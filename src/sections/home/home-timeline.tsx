import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

interface ChangelogEntry {
  title: string;
  description: string | React.ReactNode;
  icon?: React.ReactNode;
}

interface ChangelogYear {
  year: string;
  entries: ChangelogEntry[];
}

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

export default function HomeTimeline() {
  const changelog: ChangelogYear[] = [
    {
      year: "2023",
      entries: [
        {
          title: "300+ users on Algochurn 🎯",
          description:
            "Algochurn crossed 300 users and I couldn't be any happier.",
        },
      ],
    },
    {
      year: "2022",
      entries: [
        {
          title: "Started working on Moonbeam 🤓",
          description:
            "Started working on Moonbeam as a front-end developer. Building a chrome extension was the most fun and challenging part.",
        },
        {
          title: "Algochurn crosses 200 users 🎯",
          description:
            "Algochurn is now helping 200+ registered users and 14,000+ monthly users.",
        },
        {
          title: "1,000+ Followers on Twitter 🎉",
          description: (
            <>
              Crossed 1,000 mark on Twitter. You can help increase the count by
              following me. 😊
            </>
          ),
        },
        {
          title: "Built and launched Algochurn 🔗",
          description:
            "Built Algochurn, A platform to practice DS ALgo along with front-end to ace your next technical interview.",
        },
      ],
    },
  ];

  return (
    <section className="w-full mt-14">
      <h2 className="mb-3 text-3xl font-bold">Life Changelog and Updates</h2>

      {changelog.map((yearData) => (
        <>
          <div key={yearData.year} className="mb-3">
            <h2 className="text-lg font-bold mb-6">{yearData.year}</h2>

            <div className="space-y-8">
              {yearData.entries.map((entry, index) => (
                <div key={index} className="flex gap-1">
                  <div className="mt-2">
                    <BsPatchCheckFill className="text-blue-500 mr-2" />
                  </div>
                  <div>
                    <h3 className="text-md font-semibold mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-gray-700 text-md">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Divider />
        </>
      ))}
    </section>
  );
}
