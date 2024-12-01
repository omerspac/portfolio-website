import styles from "@/app/components/header/page.module.css"
import Link from "next/link"

export default function Header() {
    return (
      <header>
        <div className="nav">
          <ul className="nav-child">
              <Link href="/" className="nav-elements">
              <li>Home</li>
              </Link>

              <Link href="/" className="nav-elements">
              <li>Services</li>
              </Link>

              <Link href="/" className="nav-elements">
              <li>Case Study</li>
              </Link>

              <Link href="/" className="nav-elements">
              <li>Portfolio</li>
              </Link>

              <Link href="/" className="nav-elements">
              <li>Blog</li>
              </Link>

              <Link href="/" className="nav-elements">
              <button className="nav-btn">
                <p className="nav-btn-text">Inquire</p>
              </button>
              </Link>
          </ul>
        </div>
      </header>
    )
}