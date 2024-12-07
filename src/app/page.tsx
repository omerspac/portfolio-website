import Image from "next/image";
import Header from "./components/header/page";
import ScrollToTopButton from "./components/ScrollToTop";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <p className="home-text">I am a</p>
        <div className="home-animation-text">
          <p className="home-text2">NextJS Developer</p>
        </div>
      </div>
      <p>ez</p><br /><br /><br /><br /><br /><br /><br />
      <ScrollToTopButton />
    </>
  );
}
