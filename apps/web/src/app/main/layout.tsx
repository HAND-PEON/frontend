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

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex-1">
      <Header />
      <div>
        <BannerSlides data={bannerData} totalViewURL="/recommend" />
      </div>
      <div>{children}</div>
    </div>
  );
}
