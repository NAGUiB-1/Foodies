import Facebook from "../assets/facebook.png";
import Insta from "../assets/insta.png";
import Twitter from "../assets/twitter.png";
export default function Footer() {
  let h6Style = "text-2xl font-bold";
  return (
    <footer className="container mx-auto ">
      <div className="flex flex-col md:flex-row md:items-start md:justify-start justify-center items-center mb-20 gap-10 md:gap-0">
        <div className="w-full md:w-[33.2%] flex flex-col gap-8">
          <h6 className={h6Style}>Foodies</h6>
          <p className="w-full md:w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor{" "}
          </p>
          <div className="flex gap-4">
            <img src={Facebook} alt="" />
            <img src={Insta} alt="" />
            <img src={Twitter} alt="" />
          </div>
        </div>
        <div className="w-full md:w-[16.6%] flex flex-col gap-8">
          <h6 className={h6Style}>About Us</h6>
          <ul className="footer-ul">
            <li>About US</li>
            <li>Service US</li>
            <li>Contact</li>
            <li>Company</li>
          </ul>
        </div>
        <div className="w-full md:w-[16.6%] flex flex-col gap-8">
          <h6 className={h6Style}>Company</h6>
          <ul>
            <li>Partnership</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="w-full md:w-[33.2%] flex flex-col gap-8">
          <h6 className={h6Style}>Get in touch</h6>
          <p className="w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
          <form action="" className="flex gap-4 flex-wrap">
            <input
              className="border-2 p-2  rounded-lg"
              placeholder="E-mail"
              type="email"
            />
            <button
              type="submit"
              className="bg-[#06C167] px-4 py-2 rounded text-white font-bold "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <p className="w-full text-center font-bold mb-5">
        Copyright © 2021 Foodies.
      </p>
    </footer>
  );
}
