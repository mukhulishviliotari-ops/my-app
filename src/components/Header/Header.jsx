import Link from "next/link";
import styles from "./Header.module.css";

function Header({ navigationData = [] }) {
  return (
    <header className={styles.headerCont}>
      <Link href="/" className={`${styles.navItem} ${styles.logo}`}>
        CodeIT
      </Link>
      <nav className={styles.navCont}>
        <ul className={styles.navList}>
          {navigationData.map((navObj) => (
            <li key={navObj.href }>
              <Link href={navObj.href} className={styles.navItem}>
                {navObj.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;