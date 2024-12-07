import Link from "next/link";
import Logo from "@/app/images/omerworks_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-child">
          
          {/* Logo */}
          <li className="logo">
            <Link href="/">
              <Logo className="logo-svg" />
            </Link>
          </li>

          {/* Navigation Links */}
          <li className="nav-elements">
            <Link href="/">Home</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Services</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Case Study</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Portfolio</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Blog</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">
              <button className="nav-btn">
                <p className="nav-btn-text">Inquire</p>
              </button>
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
