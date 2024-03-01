import about from "../../public/About.png";
import "../app/globals.css";
import Image from "next/image";
function About() {
  return <Image src={about} alt="about" />;
}

export default About;
