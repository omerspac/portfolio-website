import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "./components/ScrollToTop";
import MainBannerText from "./components/MainBannerText";
import HomePagePicture from "./images/omerworks-homepage-png.png";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return (
    <>
      <div className="home-banner">
        
        <p className="home-text">I am a</p>
        <MainBannerText />
        <div className="inside-home-banner">
          <p className="inside-home-banner-text">I offer professional graphic design and web development services that blend creativity with functionality, delivering visually stunning designs and seamless user experiences.</p>
          <button className="inside-home-banner-btn">
              <p className="inside-home-banner-btn-text">Get In Touch</p>
          </button>
        </div>

        <div className="homepage-svg-container">
          <Image
            className="homepage-svg"
            src={HomePagePicture}
            alt="Omerworks Homepage"
            layout="intrinsic"
            width={428}
            height={485}
            quality={100}
          />
        </div>

      </div>
      <div className="services-banner">
        <p className="services-text">Our Services</p>
      </div>
      <p>ez</p><br /><br /><br /><br /><br /><br /><br />
      <ScrollToTopButton />
    </>
  );
}