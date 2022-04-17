import styles from '../styles/HeaderFooter.module.css'
import Script from 'next/script'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <ul className={styles.Footer}>
        <li>
          <Link href="/Q&A">Q&A > </Link>
        </li>
        <li>
          <Link href="/contact">CONTACT > </Link>
        </li>
        <li>
          <Link href="/about">ABOUT > </Link>
        </li>
      </ul>
      <Script
        src="https://kit.fontawesome.com/64beb3d505.js"
        crossOrigin="anonymous"
      />
      <ul className={styles.socialmedia} data-testid="socialmedia">
        <li>
          <a href="https://facebook.com">
            <i className="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-twitter-square fa-1.5x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-youtube-square fa-1.5x"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram-square fa-1.5x"></i>
          </a>
        </li>
      </ul>
      <ul className={styles.CopyRight}>
        <li>© 2022 Skio Ting Cake. All Rights Reserved.</li>
        <li>Made with 🤍 by Yayuan Wang</li>
      </ul>
    </footer>
  )
}
