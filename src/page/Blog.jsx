import { memo } from 'react';
import Hero from '../components/Hero';
import OurBlogs from '../components/OurBlog';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <div>
      <Hero />
      <BlogCard />
      <OurBlogs />
    </div>
  );
};

export default memo(Blog);
