import DealerMap from '@/components/common/DealerMap'
import ImageComponent from '@/components/ui/ImageComponent'
import MainBanner from '@/components/widgets/banners/MainBanner'
import CarouselProductCard from '@/components/widgets/sliders/CarouselProductCard'
import { products } from '@/utils/data'
import { EPageName } from '@/utils/enum'
import Link from 'next/link'
import React from 'react'


export default function HomePage() {
  return (
    <>
      <div className="custom_container_margin">
        <div className="space_from_top_normal_sm">
          <MainBanner />
        </div>
        <div className="space_from_top_normal inside_space_normal bg-light-dark">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-[160px] min-w-[160px]">
              <Link href={`#`}>
                <ImageComponent url='/images/common/img3.svg' img_title='' object_cover={false} />
              </Link>
            </div>
            <h1 className='primary_text_xl mb-[5px]'>Outdoor</h1>
          </div>
          <div className="space_from_top_normal">
            <CarouselProductCard
              pageName={EPageName.LANDING}
              carousel_title={``}
              data={products}
            />
          </div>
        </div>

        <div className="space_from_top_normal inside_space_normal bg-light-dark">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-[160px] min-w-[160px]">
              <Link href={`#`}>
                <ImageComponent url='/images/common/img2.webp' img_title='' object_cover={false} />
              </Link>
            </div>
            <h1 className='primary_text_xl mb-[5px]'>Speras Flashlights</h1>
          </div>
          <div className="space_from_top_normal">
            <CarouselProductCard
              pageName={EPageName.LANDING}
              carousel_title={``}
              data={products}
            />
          </div>
        </div>

        <div className="space_from_top_normal inside_space_normal bg-light-dark">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-[160px] min-w-[160px]">
              <Link href={`#`}>
                <ImageComponent url='/images/common/img1.png' img_title='' object_cover={false} />
              </Link>
            </div>
            <h1 className='primary_text_xl mb-[5px]'>Magne-Tech</h1>
          </div>
          <div className="space_from_top_normal">
            <CarouselProductCard
              pageName={EPageName.LANDING}
              carousel_title={``}
              data={products}
            />
          </div>
        </div>

        <div className="space_from_top_normal inside_space_normal bg-light-dark">
          <div className="flex gap-4 items-center justify-center">
            <div className="w-[160px] min-w-[160px]">
              <Link href={`#`}>
                <ImageComponent url='/images/common/img3.svg' img_title='' object_cover={false} />
              </Link>
            </div>
            <h1 className='primary_text_xl mb-[5px]'>Thermography</h1>
          </div>
          <div className="space_from_top_normal">
            <CarouselProductCard
              pageName={EPageName.LANDING}
              carousel_title={``}
              data={products}
            />
          </div>
        </div>
        <DealerMap />
      </div>
    </>
  )
}
