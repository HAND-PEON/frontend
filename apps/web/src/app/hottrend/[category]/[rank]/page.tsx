import { Suspense } from 'react';

import { Convenience } from '@/app/type';
import Loading from '@/components/Loading';

import HotTrendInfo from './HotTrendInfo';
import HotTrendRankList from './HotTrendRankList';

interface CategoryPageProps {
  params: { category: Convenience; rank: number };
}

export default function HotTrendCategoryRankInfoPage({
  params: { category, rank },
}: CategoryPageProps) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <HotTrendInfo category={category} rank={rank} />
        <HotTrendRankList category={category} />
      </Suspense>
    </>
  );
}
