'use client';

import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import TabCategory from '@/components/TabCategory';

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

const categoryInfoList = [
  {
    label: 'ALL',
    children: (
      <CategoryChildren>
        <HotTrend convenience="ALL" />
        <DiscountItems convenience="ALL" />
      </CategoryChildren>
    ),
  },
  {
    label: 'CU',
    children: (
      <CategoryChildren>
        <HotTrend convenience="CU" />
        <DiscountItems convenience="CU" />
      </CategoryChildren>
    ),
  },
  {
    label: 'GS25',
    children: (
      <CategoryChildren>
        <HotTrend convenience="GS25" />
        <DiscountItems convenience="GS25" />
      </CategoryChildren>
    ),
  },
  {
    label: '7Eleven',
    children: (
      <CategoryChildren>
        <HotTrend convenience="7Eleven" />
        <DiscountItems convenience="7Eleven" />
      </CategoryChildren>
    ),
  },
  {
    label: 'Emart24',
    children: (
      <CategoryChildren>
        <HotTrend convenience="Emart24" />
        <DiscountItems convenience="Emart24" />
      </CategoryChildren>
    ),
  },
];

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
