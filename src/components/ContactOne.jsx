export default function ContactOne() {
  return (
    <div>
      <div className="flex md:flex-row flex-col-reverse w-[90%] gap-10 mx-auto bg-[##f7f6f2] py-16">
        <div className="md:w-[50%] md:h-[95vh] h-[40vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1375205.7326514812!2d2.5441227738969707!3d6.4184163201830975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf2bae227550d%3A0xe771ad7f1bbe89d6!2sLagos!5e0!3m2!1sen!2sng!4v1739912665609!5m2!1sen!2sng"
            height="450"
            className="border-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="md:w-[50%] shadow-inner bg-gray-50">
          <form action="POST" className="p-6 md:p-12">
            <div>
              <input
                type="text"
                name="Name: "
                id="name"
                placeholder="Your name"
                required
                className="w-full p-3 focus:ring-[0.3px] focus:ring-black border focus:outline-0 border-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="E-mail: "
                id="e-mail"
                required
                placeholder="Your E-mail"
                className="w-full my-5 p-3 focus:ring-[0.3px] focus:ring-black border focus:outline-0 border-gray-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="Subject: "
                id="subject"
                required
                className="w-full p-3 focus:ring-[0.3px] focus:ring-black focus:outline-0 border border-gray-400"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                name="Message"
                id="message"
                placeholder="Message"
                cols={30}
                rows={7}
                required
                className="w-full my-5 p-3 focus:ring-[0.3px] focus:ring-black focus:outline-0 border border-gray-400"
              />
            </div>
            <button
              className="uppercase bg-background text-white py-4 rounded-full font-semibold px-10 hover:text-background hover:bg-white hover:border hover:border-background"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
