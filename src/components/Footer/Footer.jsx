import Link from "next/link";
import styles from "./Footer.module.css";

function Footer({ navigationData = [] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.logo}>
            CodeIT
          </Link>
          <nav aria-label="Footer navigation">
            <ul className={styles.navList}>
              {navigationData.map((navItem) => (
                <li key={navItem.href}>
                  <Link href={navItem.href} className={styles.navLink}>
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <span>Learning, building, and sharing code.</span>
          <span>&copy; {new Date().getFullYear()} CodeIT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;