'use client';

import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import TabCategory from '@/components/TabCategory';

import { Convenience } from '../type';
import CategoryChildren from './CategoryChildren';
import DiscountItems from './DiscountItems';
import Header from './Header';
import HotTrend from './HotTrend';

const bannerData: BannerInfo[] = [
  { src: '/image/banner1.png', url: '' },
  { src: '/image/banner2.png', url: '' },
  { src: '/image/banner3.png', url: '' },
  { src: '/image/banner4.png', url: '' },
  { src: '/image/banner5.png', url: '' },
  { src: '/image/banner6.png', url: '' },
];

const conveniences: Convenience[] = ['ALL', 'CU', 'GS25', '7Eleven', 'Emart24'];

const categoryInfoList = conveniences.map((name, index) => ({
  label: name,
  children: (
    <CategoryChildren index={index}>
      <HotTrend convenience={name} />
      <DiscountItems convenience={name} />
    </CategoryChildren>
  ),
}));

export default function Main() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center ">
      <div className="h-full w-[390px]">
        <Header />
        <div>
          <BannerSlides data={bannerData} totalViewURL="/recommend" />
        </div>
        <div>
          <TabCategory data={categoryInfoList} />
        </div>
      </div>
    </main>
  );
}
