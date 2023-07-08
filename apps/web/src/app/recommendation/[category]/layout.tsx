import { ReactNode } from 'react';

import { RecommendationCategory } from '@/app/type';
import TabCategory from '@/components/TabCategory';

interface HotTrendCategoryLayoutProps {
  params: { category: RecommendationCategory };
  children: ReactNode;
}

const categories: RecommendationCategory[] = ['honey', 'now', 'situation'];
const categoryNames = {
  honey: '꿀조합',
  now: '지금 유행',
  situation: '상황별 추천',
};
const categoryInfoList = categories.map((category) => ({
  category,
  label: categoryNames[category],
  href: `/recommendation/${category}`,
}));

export default function HotTrendCategoryLayout({
  children,
  params: { category },
}: HotTrendCategoryLayoutProps) {
  return (
    <div>
      <div className="sticky top-[58px] z-40">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
          isRouterReplace
        />
      </div>
      <div className="px-[22px]">{children}</div>
    </div>
  );
}
