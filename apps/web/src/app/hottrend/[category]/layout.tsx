import { ReactNode } from 'react';

import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';
import { CONVENIENCE } from '@/constants/conveniences';

interface HotTrendCategoryLayoutProps {
  params: { category: Convenience };
  children: ReactNode;
}

const convenienceList = CONVENIENCE.filter((item) => item !== 'ALL');

const categoryInfoList = convenienceList.map((convenience) => ({
  category: convenience,
  label: convenience,
  href: `/hottrend/${convenience}`,
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
      {children}
    </div>
  );
}
