import BlogCard from '../components/BlogCard/BlogCard';
import styles from './page.module.css'

import { Blog } from '../types/index';
import { getBlogPosts } from '@/api/api';

export default async function Blog() {
  const rawBlogsData: { blogs: Blog[]  } = await getBlogPosts();
  const { blogs } = rawBlogsData;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.blogList}>
         {
          blogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))
         }
       </div>
    </div>
  );
}
