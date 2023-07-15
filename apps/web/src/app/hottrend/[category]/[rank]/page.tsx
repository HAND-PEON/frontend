import { Convenience } from '@/app/type';

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
      <HotTrendInfo category={category} rank={rank} />
      <HotTrendRankList category={category} />
    </>
  );
}
