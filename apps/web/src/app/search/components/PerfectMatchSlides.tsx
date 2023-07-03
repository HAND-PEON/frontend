'use client';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export type BannerInfo = {
  src: string;
  url: string;
};

interface BannerSlidesProps {
  data: BannerInfo[];
}

const PerfectMatchSlides = ({ data }: BannerSlidesProps) => {
  return (
    <div className="h-full overflow-hidden">
      <Swiper
        className="h-full"
        slidesPerView={'auto'}
        pagination={{ clickable: true }}
        spaceBetween={15}
        modules={[Autoplay, A11y, Pagination]}
        autoplay
        // loop
      >
        {data.map(({ src, url }, idx) => (
          <SwiperSlide
            key={`${idx}-${src}`}
            className="!aspect-square !h-auto !w-auto"
          >
            <Link href={url} className="block h-full w-full">
              <div className="relative h-full w-full overflow-hidden rounded-[9px]">
                <Image
                  className="!object-cover"
                  alt={src}
                  src={src}
                  priority
                  fill
                  sizes="(min-width: 768px) 100vw, (max-width: 1200px) 100vw"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PerfectMatchSlides;
