// 'use client'
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
// import { Autoplay, Pagination } from 'swiper/modules';
// import Image from 'next/image';
// import { RelatedBlogsEntity } from '@/redux/interfaces/blog';
// import Link from 'next/link';
// import { getBlogPostPageRoutePath } from '@/routes/frontend';

// interface RelatedPostsCarouselProps {
//     data: RelatedBlogsEntity[] | null | undefined;
// }

// const RelatedPostsCarousel = ({ data }: RelatedPostsCarouselProps) => {
//     const limitText = (text: string, limit: number) => {
//         return text.length > limit ? text.slice(0, limit) + '...' : text;
//     };

//     return (
//         <div className='related_blog_carousel'>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={10}
//                 pagination={{ clickable: true, el: '.related_post_pagination' }}
//                 modules={[Pagination, Autoplay]}
//                 autoplay={{
//                     delay: 3000, 
//                     disableOnInteraction: false,
//                 }}
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1,
//                         spaceBetween: 10,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                         spaceBetween: 10,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                         spaceBetween: 10,
//                     },
//                 }}
//             >
//                 {data && data.length > 0 && data.map((post, index) => (
//                     <SwiperSlide key={index} className='!h-auto !flex'>
//                         <div className="block border overflow-hidden rounded-xl bg-white w-full">
//                             <Link href={getBlogPostPageRoutePath(post?.slug)}>
//                                 <div className='h-[200px]'>
//                                     <Image
//                                         src={post?.banner_image || ''}
//                                         width={1000}
//                                         height={1000}
//                                         alt={post.title}
//                                         title={post.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <div className="p-5">
//                                     <h3 className="text-lg font-semibold">{limitText(post.title, 15)}</h3>
//                                     <p className="text-sm text-gray-600 mt-2">
//                                         {limitText(post.excerpt, 100)}
//                                     </p>
//                                 </div>
//                             </Link>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//             <div className="related_post_pagination"></div>
//         </div>
//     );
// };

// export default RelatedPostsCarousel;
