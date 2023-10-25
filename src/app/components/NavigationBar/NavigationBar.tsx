'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

import styles from './NavigationBar.module.css'
import { Dictionary } from '@/app/types';

export default function NavigationBar(props: { lang: string, dict: Dictionary }) {
  const { dict, lang } = props;
  const pathname = usePathname();
  const pathnameWithoutLangPrefix = pathname === `/${lang}` ? pathname.replace(`${lang}`, '') : pathname.replace(`${lang}/`, '');

  return (
    <nav className={styles.nav}>
      <Link className={pathnameWithoutLangPrefix === '/' ? styles.selectedLink : undefined} href={`/${lang}`}>{dict.navigationBar.home}</Link>
      <Link className={pathnameWithoutLangPrefix.includes('/blog') ? styles.selectedLink : undefined} href={`/${lang}/blog`}>{dict.navigationBar.blog}</Link>
    </nav>
  );
}
