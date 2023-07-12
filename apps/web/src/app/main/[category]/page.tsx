'use client';

import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';

import CategoryChildren from '../CategoryChildren';
import EventItems from './EventItems';
import HotTrend from './HotTrend';
import { CONVENIENCE } from '@/constants/conveniences';
import { Suspense } from 'react';

interface CategoryPageProps {
  params: { category: Convenience };
}

const categoryInfoList = CONVENIENCE.map((convenience) => ({
  category: convenience.toUpperCase(),
  label: convenience,
  href: `/main/${convenience.toUpperCase()}`,
}));

export default function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  return (
    <div>
      <div className="sticky top-0 z-30">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
        />
      </div>
      <CategoryChildren convenience={category}>
        <HotTrend convenience={category} />
        <Suspense fallback={<p>Loading...</p>}>
          <EventItems convenience={category} />
        </Suspense>
      </CategoryChildren>
    </div>
  );
}
