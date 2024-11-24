import { FaLaptopCode } from "react-icons/fa";
import { CardHoverEffect } from "../../components/cardHoverEffect";

const HomeProjects = () => {
  return (
    <>
      <section className="w-full mt-14">
        <h2 className="mb-3 text-4xl font-bold">Projects</h2>
        <div className="content max-full">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
            <CardHoverEffect
              title="For Your Beauty"
              description="This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things."
              icon={<FaLaptopCode className="h-8 w-8 text-gray-500" />}
            />
            <CardHoverEffect
              title="Timezzi"
              description="This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things."
              icon={<FaLaptopCode className="h-8 w-8 text-gray-500" />}
            />
            <CardHoverEffect
              title="The Brandrsco"
              description="This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things."
              icon={<FaLaptopCode className="h-8 w-8 text-gray-500" />}
            />
            <CardHoverEffect
              title="Studywello"
              description="This is a description of the card. It's a beautiful card, and it's got a nice hover effect. Hover over me to reveal things."
              icon={<FaLaptopCode className="h-8 w-8 text-gray-500" />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProjects;
