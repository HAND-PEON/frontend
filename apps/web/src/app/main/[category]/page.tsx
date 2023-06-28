'use client';

import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';

import CategoryChildren from '../CategoryChildren';
import EventItems from './EventItems';
import HotTrend from './HotTrend';

interface CategoryPageProps {
  params: { category: Convenience };
}

const conveniences: Convenience[] = ['ALL', 'CU', 'GS25', '7Eleven', 'Emart24'];
const categoryInfoList = conveniences.map((convenience) => ({
  label: convenience,
  href: `/main/${convenience}`,
}));

export default function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  return (
    <div>
      <TabCategory categoryData={categoryInfoList} currentCategory={category} />
      <CategoryChildren convenience={category}>
        <HotTrend convenience={category} />
        <EventItems convenience={category} />
      </CategoryChildren>
    </div>
  );
}
