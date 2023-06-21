'use client';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import TotalViewButton from './TotalViewButton';

export type BannerInfo = {
  src: string;
  url: string;
};

interface BannerSlidesProps {
  data: BannerInfo[];
  totalViewURL?: string;
}

export default function BannerSlides({
  data,
  totalViewURL,
}: BannerSlidesProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="relative h-[210px] overflow-hidden">
      <TotalViewButton
        totalViewURL={totalViewURL}
        currentSlideIndex={slideIndex + 1}
        totalLength={data.length}
        totalViewText="모두 보기"
      />
      <Swiper
        modules={[Autoplay, A11y]}
        autoplay
        loop
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={({ realIndex }) => {
          setSlideIndex(realIndex);
        }}
      >
        {data.map(({ src, url }, idx) => (
          <SwiperSlide key={`${idx}-${src}`}>
            {/* https://nextjs.org/docs/app/api-reference/components/image#fill  image에 fill 속성이 있을 경우 상위 요소에 position이 있어야 함*/}
            <Link href={url} className="relative">
              <Image
                className="!relative !object-cover"
                alt={src}
                src={src}
                fill
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
