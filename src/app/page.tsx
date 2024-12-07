import Image from "next/image";
import Header from "./components/header/page";
import ScrollToTopButton from "./components/ScrollToTop";
import MainBannerText from "./components/MainBannerText";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <>
      <div className="home-banner">
        <p className="home-text">I am a</p>
        <MainBannerText />
      </div>
      <p>ez</p><br /><br /><br /><br /><br /><br /><br />
      <ScrollToTopButton />
    </>
  );
}
