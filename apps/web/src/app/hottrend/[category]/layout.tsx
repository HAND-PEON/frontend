import { ReactNode } from 'react';

import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';

interface HotTrendCategoryLayoutProps {
  params: { category: Convenience };
  children: ReactNode;
}

const conveniences: Convenience[] = ['CU', 'GS25', '7Eleven', 'Emart24'];
const categoryInfoList = conveniences.map((convenience) => ({
  label: convenience,
  href: `/hottrend/${convenience}/1`,
}));

export default function HotTrendCategoryLayout({
  children,
  params: { category },
}: HotTrendCategoryLayoutProps) {
  return (
    <div>
      <TabCategory
        categoryData={categoryInfoList}
        currentCategory={category}
        isRouterReplace
      />
      {children}
    </div>
  );
}
