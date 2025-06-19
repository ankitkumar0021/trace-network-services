import Link from 'next/link'
import React from 'react'
import { GoDotFill } from 'react-icons/go';

interface BreadcrumbsProps {
    data: string[];
}
export default function Breadcrumbs({ data }: BreadcrumbsProps) {
    return (
        <>
            <div className="flex gap-2 justify-center mt-4 items-center font-rubik text-white">
                <p><Link href={`/`}>Home </Link></p>
                <p><GoDotFill className='!text-xs' /></p>
                {data && data?.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </>
    )
}
