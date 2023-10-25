
'use client'

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'

import Stack from '../Stack/Stack';
import Button from '../Button/Button';
import styles from './BlogCard.module.css';
import { Blog, Dictionary } from '../../types/index';

export default function BlogCard(props: { blog: Blog, dict: Dictionary  }) {
  const router = useRouter();
  const currentPathname = usePathname();

  const { blog, dict } = props;
  const {
    id,
    title,
    photo_url: photoUrl,
  } = blog;

  return (
    <Stack className={styles.cardContainer} size="lg">
      <Stack>
        <h5>{dict.blogCard.title}</h5>
        <p className={styles.fontSizeSmall}>{title}</p>
      </Stack>
      <Image
        alt="Blog post photo url"
        src={photoUrl}
        width={140}
        height={120}
      />
      <Button
        variant="primary"
        onClick={() => router.push(`${currentPathname}/${id}`)}
      >
        {dict.blogCard.seeDetailsButtonText}
      </Button>
    </Stack>
  );
}
