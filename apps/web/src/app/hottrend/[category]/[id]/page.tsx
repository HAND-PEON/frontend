'use client';
import { Suspense } from 'react';

import { Convenience } from '@/app/type';
import Loading from '@/components/Loading';

import HotTrendInfo from './HotTrendInfo';
import HotTrendRankList, { HotTrendRankListSkeleton } from './HotTrendRankList';

interface CategoryPageProps {
  params: { category: Convenience; id: number };
}

export default function HotTrendCategoryRankInfoPage({
  params: { category, id },
}: CategoryPageProps) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {id.toString() !== 'null' && (
          <HotTrendInfo category={category} id={id} />
        )}
      </Suspense>
      <Suspense fallback={<HotTrendRankList.Skeleton category={category} />}>
        <HotTrendRankList category={category} />
      </Suspense>
    </>
  );
}
