import Navbar from "./Navbar";
import Group1 from "../assets/hero-g1.svg";
import Group2 from "../assets/hero-g2.svg";
import Group3 from "../assets/hero-g3.svg";
import HeroImg from "../assets/hero-img.png";
import Polcadot from "../assets/Polcadot.png";
import Person from "../assets/person.png";
import Star from "../assets/Star.svg";
import RightArrow from "../assets/RightArrow.svg";

export default function Hero() {
  let style =
    "flex bg-[#fff] p-2 rounded-full  items-center gap-2 w-max font-bold h-fit  w-[250px]";
  return (
    <div>
      <Navbar />
      <div className="   bg-[#F3FCF7] pb-6 ">
        <div className="container mx-auto flex  py-4 overflow-hidden flex-col md:flex-row">
          <div className="left flex justify-between flex-col w-full text-center md:text-left ">
            <div>
              <h2 className="text-6xl lg:text-8xl font-bold mt-20">
                We're Serious <br /> For Food.
              </h2>
              <p className="text-xl mt-4">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
              <div className="py-4 px-6 rounded cursor-pointer mt-4  bg-[#06c167] gap-2 justify-center md:justify-between flex md:w-[180px] self-center text-white font-bold mx-auto md:mx-0 w-[90%] mb-10 md:mb-0">
                <p>Get Started</p>
                <img src={RightArrow} alt="" />
              </div>
            </div>
            <div className="md:flex mb-10 hidden  w-full  xl:mb-20 xl:mt0">
              <img src={Group1} alt="Group1" className=" w-[100px] lg:w-auto" />
              <img src={Group2} alt="Group2" className=" w-[100px] lg:w-auto" />
              <img src={Group3} alt="Group3" className=" w-[100px] lg:w-auto" />
            </div>
          </div>

          <div className="right relative w-full">
            <div className="relative overflow-hidden mx-auto md:m-0 w-fit">
              <img src={HeroImg} alt="Hero" />
              <img
                src={Polcadot}
                alt="Polcadot"
                className="absolute bottom-[0] right-[0]"
              />
            </div>
            <div
              className={`${style} absolute md:top-[20%] md:right-[0] bottom-[10%] right-[calc(50%-125px)]`}
            >
              <img src={Person} alt="Person" />
              <p>Good Quality Products</p>
            </div>
            <div
              className={`${style} absolute md:top-[50%] md:left-[-10%] bottom-[30%] right-[calc(50%-125px)]`}
            >
              <p>5.0 Ratings</p>
              <img src={Star} alt="Star" />
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-wrap justify-center gap-2">
          <img src={Group1} alt="Group1" className="w-[40%] " />
          <img src={Group2} alt="Group2" className="w-[40%]" />
          <img src={Group3} alt="Group3" className="w-[40%]" />
        </div>
      </div>
    </div>
  );
}
