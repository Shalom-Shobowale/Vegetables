import ContactBoxes from "../../components/ContactBoxes";
import ContactOne from "../../components/ContactOne";
import Landing2 from "../../components/Landing2";

export default function Contact() {
  return (
    <div>
      <Landing2 name="Home Contact" image="url(about.png)" title="Contact Us" />
      <ContactBoxes />
      <ContactOne />
    </div>
  );
}
