import BlogCard from '../../components/BlogCard/BlogCard';
import styles from './page.module.css'

import { Blog } from '../../types/index';
import { getBlogPosts } from '@/api/api';
import { getDictionary } from '@/dictionaries/dictionaries';

export default async function Blog(props: { params: { lang: string } }) {
  const rawBlogsData: { blogs: Blog[]  } = await getBlogPosts();
  const dict = await getDictionary(props.params.lang);
  const { blogs } = rawBlogsData;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.blogList}>
         {
          blogs.map(blog => (
            <BlogCard
              key={blog.id}
              blog={blog}
              dict={dict}
            />
          ))
         }
       </div>
    </div>
  );
}
