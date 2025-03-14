import Popup from "../../components/Popup";
import AboutSection from "../../components/AboutSection";
import Count from "../../components/Count";
import Landing2 from "../../components/Landing2";
import Services from "../../components/Services";
import Testcard from "../../components/TestCard";
import Testimony from "../../components/Testimony";

export default function About() {
  return (
    <>
      <Landing2 image="url(about.png)" name="Home About" title="About Us"/>
      <AboutSection />
      <Count />
      <Testimony />
      <Testcard />
      <div className="bg-[#f7f6f2] py-4">
        <Services />
      </div>
    </>
  );
}

