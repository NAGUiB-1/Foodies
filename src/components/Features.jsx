import Truck from "../assets/truck.svg";
import Wallet from "../assets/wallet.svg";
import Precentage from "../assets/precentage.svg";
import Headphone from "../assets/headphone.svg";
export default function Features() {
  let cardStyle = `flex items-center flex-col justify-center md:flex-row  gap-3 p-3  w-[180px] md:w-[220px] hover:bg-green-100 cursor-pointer transition-all `;
  let innerStyle = `flex flex-col justify-center items-center text-center md:text-center font-medium`;
  return (
    <div className="container mx-auto border-y-2 mt-10 flex justify-between sm:flex-row flex-col items-center ">
      <div className={cardStyle} data-aos="flip-up" data-aos-delay="300">
        <img src={Truck} alt="" />
        <div className={innerStyle}>
          <p>Free Shipping</p>
          <p>Orders over $140</p>
        </div>
      </div>
      <div className={cardStyle} data-aos="flip-down" data-aos-delay="400">
        <img src={Wallet} alt="" />
        <div className={innerStyle}>
          <p>Quick payment</p>
          <p>100% secure payment</p>
        </div>
      </div>
      <div className={cardStyle} data-aos="flip-up" data-aos-delay="450">
        <img src={Precentage} alt="" />
        <div className={innerStyle}>
          <p>Special Promo</p>
          <p>Get speacial promo</p>
        </div>
      </div>
      <div className={cardStyle} data-aos="flip-down" data-aos-delay="500">
        <img src={Headphone} alt="" />
        <div className={innerStyle}>
          <p>24/7 Support</p>
          <p>Ready support</p>
        </div>
      </div>
    </div>
  );
}
