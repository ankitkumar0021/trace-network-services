import React from 'react'
import ImageComponent from '../../ui/ImageComponent'
import { categoryItem } from '@/utils/data'

export default function CategoryCard() {
    return (
        <>
            <div className='grid grid-cols-5 gap-4'>
                {categoryItem && categoryItem.length > 0 && categoryItem.map((item, index) => (
                    <div className="bg-white col-span-1" key={index}>
                        <div className="h-[195px] overflow-hidden">
                            <ImageComponent url={item?.img} img_title={item?.title} object_cover={true} />
                        </div>
                        <div className="text-center p-2">
                            <p className='font-michroma text-secondary-dark'>{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
