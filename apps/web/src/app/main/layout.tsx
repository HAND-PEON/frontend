import BannerSlides, { BannerInfo } from '@/components/BannerSlides';
import { BANNER_DATA } from '@/constants/assets';
import Header from './Header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="flex-1 bg-[#F7F7F7]">
      <Header />
      <div className="h-[178px]">
        <BannerSlides data={BANNER_DATA} totalViewURL="/recommendation" />
      </div>
      <div>{children}</div>
    </div>
  );
}
