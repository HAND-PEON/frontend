import { ReactNode } from 'react';

import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';

interface HotTrendCategoryLayoutProps {
  params: { category: Convenience };
  children: ReactNode;
}

const conveniences: Convenience[] = ['CU', '7Eleven', 'GS25', 'Emart24'];
const categoryInfoList = conveniences.map((convenience) => ({
  category: convenience,
  label: convenience,
  href: `/hottrend/${convenience}/1`,
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
