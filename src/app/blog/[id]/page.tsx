import Link from 'next/link';

import { Blog } from '../../types/index';
import { getBlogPostById, getBlogPosts } from '@/api/api';

import styles from './index.module.css';

export default async function ArticleDetails(props: { params: { id: number } }) {
  const { params: { id  } } = props;
  const rawBlog = await getBlogPostById(id);
  const { blog } = rawBlog;
  const {
    title,
    description,
    content_html: contentHtml
  } = blog;
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/blog">&lt;-- Go Back</Link>

      <h1 className={styles.mt20}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.mt20}>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const result: { blogs: Blog[] } = await getBlogPosts();
 
  return result.blogs.map((blog) => ({
    id: blog.id.toString(),
  }))
}
