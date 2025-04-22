import ScrollVelocity from "@/components/ScrollVelocity";

const Scroller = () => {
  let velocity = 80;
  return (
    <>
      <ScrollVelocity
        texts={["React Bits", "Scroll Down"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
      ;
    </>
  );
};

export default Scroller;
