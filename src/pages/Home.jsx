import Hero from "./sections/Home/Hero";
import Stats from "./sections/Home/Stats";
import WhyChooseUs from "./sections/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="bg-[#01295C]">
        <Hero /> 
        <Stats />
        <WhyChooseUs/>
      </div>
    </>
  );
};

export default Home;