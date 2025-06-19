'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiBoxList, CiGrid41 } from 'react-icons/ci'
import { motion } from 'framer-motion'
import { getBlogs } from '@/routes/routes'
// import { useGetAllBlogsDataQuery } from '@/redux/api-endpoints/getApi'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/redux/store'

const blogs = [
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  {
    id: 1,
    slug: 'first-post',
    banner_image: '/images/blogs/pro.jpg',
    title: 'First Blog Post',
    content: '<p>This is a summary of the first blog post...</p>',
    createdBy: { name: 'Admin' },
    createdAt: '2025-06-01T10:30:00.000Z'
  },
  
]

export default function AllBlogs() {
      const [selectedView, setSelectedView] = useState('grid')
      // const [selectedPage, setSelectedPage] = useState<number>(1);
      // const { blogSearchName } = useSelector((state: RootState) => state.commonData)
      // const { data: res, isLoading, isError, error } = useGetAllBlogsDataQuery({ searchName: blogSearchName || '', limit: '10', page: selectedPage?.toString() });
      // console.log("data", res);
      

  return (
    <>
      <div className="w-fit ml-auto cursor-pointer">
        {selectedView === 'grid' ? (
          <CiBoxList className="text-2xl transition-transform duration-300 hover:scale-120" onClick={() => setSelectedView('list')} />
        ) : (
          <CiGrid41 className="text-2xl transition-transform duration-300 hover:scale-120" onClick={() => setSelectedView('grid')} />
        )}
      </div>

      <motion.div
        key={selectedView}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={selectedView === 'grid' ? 'grid grid-cols-2 gap-5' : 'space-y-10'}
      >
        {blogs.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="overflow-hidden shadow border border-gray-200 rounded-md"
          >
            <Link href={getBlogs()}>
              <div className={selectedView === 'grid' ? 'h-60 w-full' : 'h-96 w-full'}>
                <Image
                  src={item.banner_image}
                  width={1000}
                  height={600}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium font-rubik text-primary">
                  By Huntsman / 21/04/2011
                </p>
              </div>
              <Link href={getBlogs()}>
                <h2 className="text-xl font-semibold mb-2 capitalize">{item.title}</h2>
              </Link>
              <div className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vitae odio reiciendis dicta at molestiae sint temporibus modi animi dolores.
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </>
  )
}
