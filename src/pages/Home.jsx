import Courses from "./sections/Home/Courses";
import Hero from "./sections/Home/Hero";
import Stats from "./sections/Home/Stats";
import WhyChooseUs from "./sections/Home/WhyChooseUs";

const Home = () => {
  return (
    <>
      <div className="bg-[#1e3a8a]">
        <Hero /> 
        <Stats />
        <WhyChooseUs/>
        <Courses/>
      </div>
    </>
  );
};

export default Home;