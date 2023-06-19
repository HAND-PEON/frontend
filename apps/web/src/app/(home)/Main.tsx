import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import TabCategory from '@/components/TabCategory';

import Header from './Header';

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
    children: <div>ALL</div>,
  },
  {
    label: 'CU',
    children: <div>CU</div>,
  },
  {
    label: 'GS25',
    children: <div>GS25</div>,
  },
  {
    label: '7Eleven',
    children: <div>7Eleven</div>,
  },
  {
    label: 'Emart24',
    children: <div>Emart24</div>,
  },
];

export default function Main() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
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
