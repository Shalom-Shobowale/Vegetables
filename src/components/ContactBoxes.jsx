import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosClock } from "react-icons/io";
export default function ContactBoxes() {
  return (
    <div className="flex items-center justify-center mt-12">
      <div className="flex md:flex-row flex-col justify-between w-[90%] ">
        <div className="flex flex-col gap-5 items-center">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-gray-50">
            <a href="#map">
              <FaLocationDot className="text-2xl text-background" />
            </a>
          </div>
          <h1 className="text-sm tracking-widest text-textColors">
            <a href="">
              <span className="font-semibold">Address:</span>{" "}
              4,Peace,Command,Lagos state.
            </a>
          </h1>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-gray-50">
            <a href="tel:+234-903-818-6039">
              <FaPhoneAlt className="text-2xl text-background" />
            </a>
          </div>
          <h1 className="text-sm tracking-widest text-textColors">
            <a href="tel:+234-903-818-6039">
              <span className="font-semibold">Phone no:</span> 09038186039
            </a>
          </h1>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-gray-50">
            <a href="mailto:shalomshobowale65@gmail.com">
              <FaEnvelope className="text-2xl text-background" />
            </a>
          </div>
          <h1 className="text-sm tracking-widest text-textColors">
            <a href="mailto:shalomshobowale65@gmail.com">
              <span className="font-semibold">Name:</span> Shalom Shobowale
            </a>
          </h1>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <div className="h-14 w-14 rounded-full flex justify-center items-center bg-gray-50">
            <IoIosClock className="text-2xl text-background" />
          </div>
          <h1 className="text-sm text-textColors">
            <span className="font-semibold">Time:</span> 8am - 8pm
          </h1>
        </div>
      </div>
    </div>
  );
}
