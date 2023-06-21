import Header from './Header';
import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import TabCategory from '@/components/TabCategory';
import { Convenience } from '../type';

export const metadata = {
  title: 'HandPyeon',
  description: '편의점 상품을 편리하게 확인해 보세요',
};

const bannerData: BannerInfo[] = [
  { src: '/image/banner1.png', url: '' },
  { src: '/image/banner2.png', url: '' },
  { src: '/image/banner3.png', url: '' },
  { src: '/image/banner4.png', url: '' },
  { src: '/image/banner5.png', url: '' },
  { src: '/image/banner6.png', url: '' },
];

interface Props {
  children: React.ReactNode;
  params: { category: Convenience };
}

export default function HomeLayout({ children, params }: Props) {
  return (
    <div className="h-full w-[390px]">
      <Header />
      <div>
        <BannerSlides data={bannerData} totalViewURL="/recommend" />
      </div>
      <div>{children}</div>
    </div>
  );
}
