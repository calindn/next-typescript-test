export async function getBlogPosts() {
  const res = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
 
  if (!res.ok) {
    throw new Error('Failed to fetch blog posts data')
  }
 
  return res.json();
}

export async function getBlogPostById(id: number) {
  const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`);
 
  if (!res.ok) {
    throw new Error(`Failed to fetch blog post with id ${id}`)
  }
 
  return res.json();
}
