import ImageComponent from '@/components/ui/ImageComponent'
import { IPrdoctsResponse } from '@/utils/data'
import Link from 'next/link';
import React from 'react'

interface ProductCardProps {
    data: IPrdoctsResponse;
}
export default function ProductCard({ data }: ProductCardProps) {
    return (
        <>
            {/* <div className='grid grid-cols-5 gap-4'> */}
            <div className="bg-card-bg flex flex-col justify-between h-full">
                <div className='relative'>
                    <div className="h-[200px] overflow-hidden">
                        <ImageComponent url={data?.img} img_title={data?.title} object_cover={true} />
                    </div>
                    <div className='p-2 text-center space-y-1.5'>
                        <p className='text-sm font-montserrat font-semibold text-secondary-dark'>{data?.title}</p>
                        <p className='text-secondary-light text-xs font-rubik'>{data?.brand}</p>
                        <p className='text-dark-text font-bold font-rubik'>${data?.price}</p>
                    </div>
                    {data?.instock
                        ? <p className='text-primary-green font-rubik text-sm font-semibold absolute left-0 top-0 p-2'>In Stock</p>
                        : <p className='text-white bg-black font-rubik text-sm font-semibold absolute left-0 top-0 p-2'>Backorder</p>}
                </div>
               <Link href={`/product`}>
                    <button className="btn_global bg_primary btn_full_width transition-all duration-200 hover:-translate-y-1 hover:bg-[#333333]">View More</button>
               </Link>

            </div>
            {/* </div> */}
        </>
    )
}
