import { Suspense } from 'react';

import { getRecommendationBanners } from '@/apis/recommendation';
import BannerSlides from '@/components/BannerSlides';
import LoadingIndicator from '@/components/LoadingIndicator';

import Header from './Header';

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const data = await getRecommendationBanners();

  return (
    <div className="flex-1 bg-[#F7F7F7]">
      <Header />
      <div className="h-[178px]">
        <Suspense fallback={<LoadingIndicator />}>
          <BannerSlides data={data} totalViewURL="/recommendation" />
        </Suspense>
      </div>
      <div>{children}</div>
    </div>
  );
}
