'use client';

import Image from 'next/image'
import styles from './page.module.css'
import Calendar from "../Calendar"


export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
    
        <div className={styles.logoContainer}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.calendarContainer}>
          <Calendar />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </footer>
    </div>
  )
}
