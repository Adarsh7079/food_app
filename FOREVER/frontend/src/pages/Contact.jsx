import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Our Kitchen</p>
          <p className="text-gray-500">
            42 Market Street
            <br />
            Downtown, Mumbai 400001
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+91 98765 43210</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">hello@foodiehub.com</span>
          </p>

          <p className="text-gray-500">Join our team</p>
          <p className="text-gray-500">
            Help us serve more happy customers every day.
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 "
            onClick={scrollToTop}
          >
            Explore Careers
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
