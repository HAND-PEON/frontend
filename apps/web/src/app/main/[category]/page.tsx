'use client';

import { Suspense } from 'react';

import { Convenience } from '@/app/type';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';
import Loading from '@/components/Loading';
import TabCategory from '@/components/TabCategory';
import { CONVENIENCE } from '@/constants/conveniences';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import CategoryChildren from '../CategoryChildren';
import EventItems from './EventItems';
import HotTrend from './HotTrend';

interface CategoryPageProps {
  params: { category: Convenience };
}

const categoryInfoList = CONVENIENCE.map((convenience) => ({
  category: convenience,
  label: convenience,
  href: `/main/${convenience}`,
}));

export default function CategoryPage({
  params: { category },
}: CategoryPageProps) {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <div className="sticky top-0 z-30">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
        />
      </div>
      <CategoryChildren convenience={category}>
        <ApiErrorBoundary onReset={reset}>
          <Suspense fallback={<Loading />}>
            <HotTrend convenience={category} />
          </Suspense>
        </ApiErrorBoundary>
        <ApiErrorBoundary onReset={reset}>
          <Suspense fallback={<EventItems.Skeleton />}>
            <EventItems convenience={category} />
          </Suspense>
        </ApiErrorBoundary>
      </CategoryChildren>
    </div>
  );
}
