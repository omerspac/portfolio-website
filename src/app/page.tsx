import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "./components/ScrollToTop";
import MainBannerText from "./components/MainBannerText";
import HomePagePicture from "./images/omerworks-homepage-png.png";
import FAQ from "./components/faq/page";
import InquireForm from "./components/inquire-form/page";
import '@fortawesome/fontawesome-free/css/all.min.css'
import CustomerReviews from "./components/reviews/page";

export default function Home() {
  return (
    <>
      <div className="home-banner">
        
        <p className="home-text">I am a</p>
        <MainBannerText />
        <div className="inside-home-banner">
          <p className="inside-home-banner-text">I offer professional graphic design and web development services that blend creativity with functionality, delivering visually stunning designs and seamless user experiences.</p>
          <Link href="#inquire-section">
          <button className="inside-home-banner-btn">
              <p className="inside-home-banner-btn-text">Get In Touch</p>
          </button>
          </Link>
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

      <section id="services-section">
        <div className="services-banner">

          <p className="services-text">Our Services</p>
          <p className="e text-center text-white text-lg opacity-70">"Explore our expert services designed to elevate your business with innovative solutions and unparalleled support"</p>
          <div className="cards-group flex justify-center gap-[40px]">
            <div className="card rounded-[40px]">
            </div>
            <div className="card rounded-[40px]">
            </div>
            <div className="card rounded-[40px]">
            </div>
          </div>
          <div className="cards-group flex justify-center gap-[40px]">
            <div className="card rounded-[40px]">
            </div>
            <div className="card rounded-[40px]">
            </div>
            <div className="card rounded-[40px]">
            </div>
          </div>
          <p className="services-text mt-[75px]">Customer Reviews</p>
          <p className="e text-center text-white text-lg opacity-70">"Discover what our customers have to say about their experiences"</p>
          
          <div className="reviews-card-group flex justify-center">
            {/* <div className="review-card rounded-[40px] opacity-30 mt-[30px] w-[1310px] h-[350px] bg-[#212121]"> */}
            <CustomerReviews/>
            {/* </div> */}
          </div>

        </div>
      </section>
      <section id="blog-section">
        <div className="blog-banner">
          <p className="services-text">Blog</p>
          <p className="e text-center text-white text-lg opacity-70">"Insights and Updates: Explore our blog for the latest in Brand Identity and 3D Animation."</p>
          <p className="coming-soon text-white text-[56px] text-center font-bold opacity-70">[COMING SOON]</p>
        </div>
      </section>
      <section id="portfolio-section">
        <div className="portfolio-banner">
          <p className="services-text">Portfolio</p>
          <p className="e text-center text-white text-lg opacity-70">"Explore our portfolio to see a showcase of our high-quality work."</p>
        </div>
      </section>
      <section id="faqs-section">
        <div className="faqs-banner">
          <p className="services-text">FAQ's</p>
          <p className="e text-center text-white text-lg opacity-70">"Find answers to commonly asked questions about our services and products below."</p>
          <FAQ />
        </div>
      </section>
      <section id="inquire-section">
        <div className="inquire-banner">
          <p className="services-text">Let's Talk Together!</p>
          <p className="e text-center text-white text-lg opacity-70">"Have questions or want to start a project? Reach out to us and let’s bring your vision to life!"</p>
          <div className="form-card-group justify-center flex">
            <InquireForm />
          </div>
        </div>
      </section>
      {/* <p>ez</p><br /><br /><br /><br /><br /><br /><br /> */}
      <ScrollToTopButton />
    </>
  );
}