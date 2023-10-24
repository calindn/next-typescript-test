'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styles from './NavigationBar.module.css'

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link className={pathname === '/' ? styles.selectedLink : undefined} href="/">Home</Link>
      <Link className={pathname.includes('/blog') ? styles.selectedLink : undefined} href="/blog">Blog</Link>
    </nav>
  );
}
