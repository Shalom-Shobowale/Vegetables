import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function Footer() {
    return(
        <footer className="flex flex-col justify-center items-center py-20 bg-[#f9f9f9]">
           <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] justify-between">
                <div>
                    <h1 className="font-medium">Vegefoods</h1>
                    <p className="mt-6 md:mb-12 text-sm text-pretty">Far far away, behind the word<br/> mountains, far from the<br/> countries Vokalia and<br/> Consonantia.</p>
                    <div className="flex gap-5 text-2xl md:mb-0 mb-8">
                        <div className="bg-gray-50 h-12 w-12 rounded-full flex justify-center items-center" data-aos="fade-up"   ><a href="http://twitter.com"><FaTwitter /></a></div>
                        <div className="bg-gray-50 h-12 w-12 rounded-full flex justify-center items-center" data-aos="fade-up"  data-aos-delay="150" ><a href="http://facebook.com"><FaFacebookF /></a></div>
                        <div className="bg-gray-50 h-12 w-12 rounded-full flex justify-center items-center" data-aos="fade-up"  data-aos-delay="300" ><a href="http://instagram.com"><FaInstagram /></a></div>
                    </div>
                </div>
                <div>
                    <h1 className="font-medium mb-5 md:mb-6">Menu</h1>
                    <ul className="text-sm">
                        <li>Shop</li>
                        <li className="my-3">About</li>
                        <li>Journal</li>
                        <li className="mt-3">Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-medium md:mt-0 mt-10 mb-4 md:mb-6">Help</h1>
                    <div className="flex items-center gap-4 text-sm">
                        <p>Shipping Information</p>
                        <p>FAQs</p>
                    </div>
                    <div className="my-3 flex items-center gap-4 text-sm">
                        <p>Returns & Exchange</p>
                        <p>Contact</p>
                    </div>
                    <p className="text-sm">Terms & Conditions</p>
                    <p className="mt-3 text-sm">Privacy Policy</p>
                </div>
                <div>
                    <h1 className="font-medium md:mt-0 mt-10 mb-4 md:mb-6">Have a Questions?</h1>
                    <div className="flex items-center gap-5 text-sm">
                        <p><FaLocationDot /></p>
                        <p>203 Fake St. Mountain<br/> View, San Francisco,<br/> California, USA</p>
                    </div>
                    <div className="flex items-center gap-5 text-sm my-3">
                        <p><FaPhone /></p>
                        <p>+2 392 3929 210</p>
                    </div>
                    <div className="flex items-center gap-5 text-sm">
                        <p><FaEnvelope /></p>
                        <p>info@yourdomain.com</p>
                    </div>
                </div>
           </div>
           <div className="flex md:flex-row flex-col items-center gap-2 mt-20 text-pretty text-sm tracking-tight">
                <p className="md:px-0 px-6">Copyright ©2025 All rights reserved | This template is made with</p> 
                <div className="flex gap-2 items-center">
                    <p><FaHeart /> </p> 
                    <p >by <span className="text-background cursor-pointer">Colorlib</span></p>
                </div>
            </div>
        </footer>
    )
}