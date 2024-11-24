import TextLabels from "../../components/text-labels";

const HeroSection = () => {
  return (
    <>
      <section className="w-full mt-6 sm:mt-14 px-5 sm:px-0">
        <div className="flex justify-between items-start flex-wrap">
          <div className="intro order-2 sm:order-1">
            <div className="content max-w-lg">
              <h2 className="mb-3 text-4xl sm:text-5xl font-bold">
                Suheer Zahid
              </h2>
              <p className="text-gray-700 text-md">
                Building <TextLabels text="Suheer&Co" /> ,{" "}
                <TextLabels text="Coderium" /> other{" "}
                <span className="font-semibold cursor-pointer">
                  cool things
                </span>
              </p>

              <p className="mt-4 text-gray-700 text-md">
                Senior Software Engineer building SaaS products and web apps.
                Find me on{" "}
                <span className="font-semibold cursor-pointer">twitter</span>{" "}
                for tech updates and memes.
              </p>
            </div>
          </div>
          <div className="profile_img order-1 sm:order-2 mb-4 sm:mb-0">
            <img
              src="https://i.pinimg.com/736x/2f/ab/59/2fab591d4427fbf591ff9eea4125e411.jpg"
              alt="image"
              className="size-24 rounded-lg object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
