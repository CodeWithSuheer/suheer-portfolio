import BlurFade from "@/components/ui/blur-fade";
import logo from "../../assets/logo/logoV3.png";

const HeroSection = () => {
  return (
    <>
      <section className="w-full mt-6 sm:mt-14 px-5 sm:px-0">
        <div className="flex justify-between items-start flex-wrap">
          <div className="intro order-2 sm:order-1">
            <div className="content max-w-lg">
              <BlurFade delay={0.35} inView>
                <h2 className="mb-3 text-4xl sm:text-5xl font-bold">
                  Suheer Zahid 👋
                </h2>
              </BlurFade>
              <BlurFade delay={0.35 * 2} inView>
                <p className="mt-3 sm:mt-4 text-gray-700 text-[16px] leading-relaxed">
                  Senior Software Engineer who's passionate about building tech
                  for good. I create impactful solutions and always work on{" "}
                  <span className="font-semibold">cool ideas</span> that help
                  people.
                </p>
              </BlurFade>
            </div>
          </div>
          <div className="profile_img order-1 sm:order-2 mb-4 sm:mb-0">
            <BlurFade delay={0.35 * 2} inView>
              <img
                src={logo}
                alt="Logo"
                className="size-20 sm:size-24 rounded-lg object-contain"
              />
            </BlurFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
