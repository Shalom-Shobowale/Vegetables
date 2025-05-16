import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const ContactPage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* CONTACT INFO */}
      <section>
        <div className="flex sm:flex-row flex-col justify-between gap-4 my-10 mx-5 sm:mx-16">
          {/* Address */}
          <div className="sm:w-[30%]">
            <div className="bg-[#92e6a7] p-4 rounded-md">
              <div className="flex gap-3 border-dotted border-2 border-secondary bg-white p-2 rounded-md items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-dotted border-2 border-secondary text-purple-900">
                  <FaLocationDot />
                </div>
                <p>123 Street, Lagos, Nigeria</p>
              </div>
            </div>
          </div>
          {/* Email */}
          <div className="sm:w-[30%]">
            <div className="bg-[#92e6a7] p-4 rounded-md">
              <div className="flex gap-3 border-dotted border-2 border-secondary bg-white p-2 rounded-md items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-dotted border-2 text-purple-900 border-secondary">
                  <FaEnvelope />
                </div>
                <a href="mailto:shalomshobowale65@gmail.com">
                  shalomshobowale@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* Phone */}
          <div className="sm:w-[30%]">
            <div className="bg-[#92e6a7] p-4 rounded-md">
              <div className="flex gap-3 border-dotted border-2 border-secondary bg-white p-2 rounded-md items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-dotted border-2 border-secondary text-purple-900">
                  <IoCall />
                </div>
                <a href="tel:+234-903-818-6039">Call Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + FORM */}
      <section className="flex sm:flex-row flex-col justify-center gap-8">
        <div className="flex items-center justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=..."
            height="500"
            width='600'
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" p-5 md:w-[40%]">
          <h1 className="text-4xl font-bold mb-10">Get In Touch With Us</h1>
          <form
            action="https://formsubmit.co/523932e3b9d23c8a2ef0b4d76d9b1f5d"
            method="POST"
            className="w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-500 rounded-full mb-4"
            />
            <input
              type="email"
              name="mail"
              placeholder="Your E-mail"
              required
              className="w-full p-3 border border-gray-500 rounded-full mb-4"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 border border-gray-500 rounded-full mb-4"
            />
            <textarea
              name="Massage"
              placeholder="Massage"
              rows="6"
              required
              className="w-full border border-gray-500 rounded-md p-3 mb-4"
            ></textarea>
            <button
              type="submit"
              className=" bg-background hover:bg-secondary px-12 py-[15px] rounded-md text-white font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
