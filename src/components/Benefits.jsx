import Benfits from "../assets/benfits.png";
import Correct from "../assets/correct.svg";

export default function Benefits() {
  let LiStyle = "flex gap-4";
  return (
    <div className="mt-20  container mx-auto flex flex-col lg:flex-row lg:h-[650px] gap-[4rem] lg:justify-center lg:items-center ">
      <div
        className="left w-full lg:w-[calc(50%-2rem)] lg:h-[90%] relative bg-[#F3FCF7] flex items-start justify-center"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <img src={Benfits} alt="Benefits" className="w-[80%] lg:static " />
      </div>
      <div
        className="right w-full lg:w-[calc(50%-2rem)] flex lg:items-start flex-col justify-center items-center"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <p className="text-green-500">Our Benefit</p>
        <h3 className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center lg:text-left font-bold">
          The More Healthy Food The Better
        </h3>
        <ul className="flex flex-col gap-4 ">
          <li className={LiStyle} data-aos="fade-right" data-aos-delay="400">
            <img src={Correct} alt="correct" />
            <span>Be Alive With Veggie Food.</span>
          </li>
          <li className={LiStyle} data-aos="fade-right" data-aos-delay="450">
            <img src={Correct} alt="correct" />
            <span>It's The Place To Be.</span>
          </li>
          <li className={LiStyle} data-aos="fade-right" data-aos-delay="500">
            <img src={Correct} alt="correct" />
            <span>Nonstop Veggie Food</span>
          </li>
          <li className={LiStyle} data-aos="fade-right" data-aos-delay="550">
            <img src={Correct} alt="correct" />
            <span>The Best Silk Dish In Town</span>
          </li>
          <li className={LiStyle} data-aos="fade-right" data-aos-delay="600">
            <img src={Correct} alt="correct" />
            <span>Truffles, Egg & Pumpkin Spice</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
