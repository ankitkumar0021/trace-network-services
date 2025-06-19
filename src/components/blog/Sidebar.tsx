import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchBlog from './SearchBlog';
import { getBlogs, getBlogsCategory } from '@/routes/routes';

const categories = [
  { id: 1, slug: 'technology', category_name: 'Technology' },
  { id: 2, slug: 'health', category_name: 'Health' },
  { id: 3, slug: 'lifestyle', category_name: 'Lifestyle' },
];

const recentPosts = [
  {
    id: 1,
    slug: 'static-first-post',
    banner_image: '/images/product/product1.jpg',
    title: 'Static First Post',
    content: '<p>This is a short summary of static first post...</p>'
  },
  {
    id: 2,
    slug: 'static-second-post',
    banner_image: '/images/product/product1.jpg',
    title: 'Static Second Post',
    content: '<p>This is a short summary of static second post...</p>'
  },
  {
    id: 3,
    slug: 'static-second-post',
    banner_image: '/images/product/product1.jpg',
    title: 'Static Second Post',
    content: '<p>This is a short summary of static second post...</p>'
  },
  {
    id: 4,
    slug: 'static-second-post',
    banner_image: '/images/product/product1.jpg',
    title: 'Static Second Post',
    content: '<p>This is a short summary of static second post...</p>'
  },
];

interface BlogSidebarProps {
  hide?: boolean;
}

export default function BlogSidebar({ hide }: BlogSidebarProps) {
  return (
    <div className="col-span-12 md:col-span-5 lg:col-span-4 pt-5 md:pt-0">
      {!hide && (
        <div className="max-md:absolute max-md:top-0 w-full mb-6">
          <h4 className="font-semibold">Search</h4>
          <SearchBlog />
        </div>
      )}
      <h4 className="font-semibold my-4 text-2xl">Categories</h4>
      <div className="space-y-3 text-[#333333] font-medium flex flex-col">
        {categories.map((item) => (
          <Link href={getBlogsCategory()} key={item.id}>{item.category_name}</Link>
        ))}
      </div>
      <h4 className="font-semibold my-4 text-2xl">Recent Posts</h4>
      <div className="space-y-4">
        {recentPosts.map((item) => (
          <Link href={getBlogs()} key={item.id} className="grid grid-cols-12 gap-x-4 items-center">
            <div className="col-span-4">
              <Image src={item.banner_image} width={1000} height={1000} alt={item.title} className="w-full h-full object-contain rounded-xl" />
            </div>
            <div className="col-span-8">
              <h5 className="font-semibold text-sm title_text mb-1">{item.title}</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. agnam repudiandae quod.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
