import { Suspense } from 'react';

import { getRecommendationBanners } from '@/apis/recommendation';
import BannerSlides from '@/components/BannerSlides';
import Loading from '@/components/Loading';

import Header from './Header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const data = await getRecommendationBanners();

  return (
    <div className="flex-1">
      <Header />
      <div className="h-[178px]">
        <Suspense fallback={<Loading />}>
          <BannerSlides data={data} totalViewURL="/recommendation" />
        </Suspense>
      </div>
      <div>{children}</div>
    </div>
  );
}
