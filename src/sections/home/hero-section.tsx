import TextLabels from "../../components/text-labels";
import logo from "../../assets/logo/logoV3.png";

const HeroSection = () => {
  return (
    <>
      <section className="w-full mt-6 sm:mt-14 px-5 sm:px-0">
        <div className="flex justify-between items-start flex-wrap">
          <div className="intro order-2 sm:order-1">
            <div className="content max-w-lg">
              <h2 className="mb-3 text-4xl sm:text-5xl font-bold">
                Suheer Zahid 👋
              </h2>

              <p className="mt-4 text-gray-700 text-md leading-relaxed">
                Senior Software Engineer. I love building things and helping
                people. Very active on Twitter. Building{" "}
                <TextLabels text="Coderium" /> other and{" "}
                <span className="font-semibold cursor-pointer">
                  cool things
                </span>
              </p>
            </div>
          </div>
          <div className="profile_img order-1 sm:order-2 mb-4 sm:mb-0">
            <img
              src={logo}
              alt="Logo"
              className="size-24 rounded-lg object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
