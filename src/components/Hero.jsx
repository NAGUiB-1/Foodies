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
    "flex bg-[#fff] p-2 rounded-full  items-center gap-2 w-max font-bold h-fit  w-[250px] hover:bg-opacity-50 cursor-pointer transition-all";
  return (
    <div>
      <Navbar />
      <div className="   bg-[#F3FCF7] pb-6 ">
        <div className="container mx-auto flex  py-4 overflow-hidden flex-col md:flex-row">
          <div
            className="left flex justify-between flex-col w-full text-center md:text-left "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div>
              <h2 className="text-6xl lg:text-8xl font-extrabold mt-20 hover:text-green-500 cursor-pointer transition-all">
                We're Serious <br /> For Food.
              </h2>
              <p className="text-xl mt-4">
                We strive to provide a space where guests can connect with
                themselves and explore their full potential, offering a safe
                place.
              </p>
              <div className="py-4 px-6 rounded cursor-pointer mt-4  bg-[#06c167] gap-2 justify-center md:justify-between flex md:w-[180px] self-center text-white font-bold mx-auto md:mx-0 w-[90%] mb-10 md:mb-0 hover:scale-90 transition-all">
                <p>Get Started</p>
                <img src={RightArrow} alt="" />
              </div>
            </div>
            <div className="md:flex mb-10 hidden gap-1  w-full mt-10 xl:mb-20 cursor-pointer">
              <img
                src={Group1}
                alt="Group1"
                className=" w-[100px] lg:w-auto"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <img
                src={Group2}
                alt="Group2"
                className=" w-[100px] lg:w-auto"
                data-aos="fade-up"
                data-aos-delay="450"
              />
              <img
                src={Group3}
                alt="Group3"
                className=" w-[100px] lg:w-auto"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </div>
          </div>

          <div className="right relative w-full">
            <div
              className="relative overflow-hidden mx-auto md:m-0 w-fit"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img src={HeroImg} alt="Hero" />
              <img
                src={Polcadot}
                alt="Polcadot"
                className="absolute bottom-[0] right-[0]"
              />
            </div>
            <div
              className={`${style} absolute md:top-[20%] md:right-[0] bottom-[10%] right-[calc(50%-125px)] `}
            >
              <img src={Person} alt="Person" />
              <p clas>Good Quality Products</p>
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
          <img
            src={Group1}
            alt="Group1"
            className="w-[40%] "
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            src={Group2}
            alt="Group2"
            className="w-[40%]"
            data-aos="fade-up"
            data-aos-delay="450"
          />
          <img
            src={Group3}
            alt="Group3"
            className="w-[40%]"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  );
}
