import styles from '../styles/HeaderFooter.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <ul className={styles.Footer}>
        <li>
          <Link href="/Q&A">Q&A &gt; </Link>
        </li>
        <li>
          <Link href="/contact">CONTACT &gt; </Link>
        </li>
        <li>
          <Link href="/about">ABOUT &gt; </Link>
        </li>
      </ul>

      <ul className={styles.CopyRight}>
        <li>© 2022 Skio Ting Cake. All Rights Reserved.</li>
        <li>Made with 🤍 by Yayuan Wang</li>
      </ul>
    </footer>
  )
}
