import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import { BANNER_DATA } from '@/constants/assets';
import Header from './Header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex-1">
      <Header />
      <div className="h-[178px]">
        <BannerSlides data={BANNER_DATA} totalViewURL="/recommend" />
      </div>
      <div>{children}</div>
    </div>
  );
}
