import BannerSlides, { BannerInfo } from '@/components/BannerSlides';

import Header from './Header';

const bannerData: BannerInfo[] = [
  { src: '/image/banner1.png', url: '' },
  { src: '/image/banner2.png', url: '' },
  { src: '/image/banner3.png', url: '' },
  { src: '/image/banner4.png', url: '' },
  { src: '/image/banner5.png', url: '' },
  { src: '/image/banner6.png', url: '' },
];

export default function Main() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <div className="h-full w-[390px]">
        <Header />
        <div>
          <BannerSlides data={bannerData} totalViewURL="/recommend" />
        </div>
      </div>
    </main>
  );
}
