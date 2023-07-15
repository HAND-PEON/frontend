import { getHotTrendGoods } from '@/apis/hotTrend';
import { HotTrendCategory } from '@/apis/type';
import { useQuery } from '@tanstack/react-query';

const queryKeyHotTrend = ['hotTrend'] as const;
const queryKeyHotTrendList = (category: HotTrendCategory) =>
  [...queryKeyHotTrend, 'list', category] as const;

export const useGetHotTrendGoods = (categoryName: HotTrendCategory) => {
  return useQuery({
    queryKey: queryKeyHotTrendList(categoryName),
    queryFn: () => getHotTrendGoods(categoryName),
    suspense: true,
    useErrorBoundary: true,
  });
};
