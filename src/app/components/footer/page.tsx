import Link from 'next/link';
import Logo from '@/app/images/omerworks_logo.svg';
import css from '@/app/components/footer/page.module.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css['footer-top']}>
        <div className={css['footer-inquire-section']}>
          <p className={css['footer-inquire-heading']}>Inquire Us Today!</p>
          <p className={css['footer-inquire-text']}>
            Discover how we can help bring your ideas to life with our expert services. Get personalized solutions tailored to your needs, delivered with excellence. Reach out to us today and take the first step toward success!
          </p>
        </div>
        <div className={css['footer-column']}>
          <h3>Services</h3>
          <ul>
            <li><Link href="#services-section">2D Graphics</Link></li>
            <li><Link href="#services-section">3D Graphics</Link></li>
            <li><Link href="#services-section">Web Development</Link></li>
            <li><Link href="#services-section">AI Chatbot</Link></li>
          </ul>
        </div>
        <div className={css['footer-column']}>
          <h3>Resources</h3>
          <ul>
            <li><Link href="#blog-section">Blog</Link></li>
            <li><Link href="#portfolio-section">Portfolio</Link></li>
            <li><Link href="#">More Content</Link></li>
          </ul>
        </div>
        <div className={css['footer-column']}>
          <h3>Support</h3>
          <ul>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Usage</Link></li>
          </ul>
        </div>
      </div>

      <div className={css['footer-bottom']}>
        <section>
          <div className={css['social-links']} >
            <Link href="#" className="w-[35px] hover:opacity-70"><FaFacebook size={20}/></Link>
            <Link href="#" className="w-[35px] hover:opacity-70"><FaInstagram size={20}/></Link>
            <Link href="#" className="w-[35px] hover:opacity-70"><BsTwitterX size={20}/></Link>
            <Link href="#" className="w-[35px] hover:opacity-70"><FaLinkedin size={20}/></Link>
            <Link href="https://www.behance.net/omerspac" target='_blank' className="w-[35px] hover:opacity-70"><FaBehanceSquare size={20}/></Link>
          </div>
        </section>

        {/* 3RD SECTION */}
        <section>
          <div className={css['legal-links']}>
            <p className={css['legal-logo']}>
              <Logo className={css['logo-svg']} />
            </p>
            <p className={css['legal-copyright']}>Copyright &copy; 2024, OmerWorks Inc.</p>
            <Link href="#">Legal Stuff</Link> ㅤ| ㅤ
            <Link href="#">Privacy Policy</Link> ㅤ| ㅤ
            <Link href="#">Security</Link> ㅤ| ㅤ
            <Link href="#">Website Accessibility</Link> ㅤ| ㅤ
            <Link href="#">Manage Cookies</Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
