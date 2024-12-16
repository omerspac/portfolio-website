import Link from 'next/link';
import Logo from '@/app/images/omerworks_logo.svg';
import css from '@/app/components/footer/page.module.css'; // Import the CSS module

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
            <li><Link href="#">2D Graphics</Link></li>
            <li><Link href="#">3D Graphics</Link></li>
            <li><Link href="#">Web Development</Link></li>
            <li><Link href="#">AI Chatbot</Link></li>
          </ul>
        </div>
        <div className={css['footer-column']}>
          <h3>Resources</h3>
          <ul>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Portfolio</Link></li>
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
          <div className={css['social-links']}>
            <Link href="#">Facebook</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">TikTok</Link>
          </div>
        </section>

        {/* 3RD SECTION */}
        <section>
          <div className={css['legal-links']}>
            <p className={css['legal-logo']}>
              <Logo className={css['logo-svg']} />
            </p>
            <p className={css['legal-copyright']}>Copyright &copy; 2024, Omerworks Inc.</p>
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
