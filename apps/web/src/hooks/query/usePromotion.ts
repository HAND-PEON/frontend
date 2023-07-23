import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  type PromotionGoodsParams,
  getPromotionGoodsList,
} from '@/apis/promotion';

export const promotionQueryKey = {
  all: ['promotion'] as const,
  lists: () => [...promotionQueryKey.all, 'list'] as const,
  list: (params: PromotionGoodsParams) =>
    [...promotionQueryKey.lists(), params] as const,
  details: () => [...promotionQueryKey.all, 'detail'] as const,
  detail: (goodsNo: number) =>
    [...promotionQueryKey.details(), goodsNo] as const,
};

export const useGetPromotionGoodsList = ({
  type,
  promotionType,
  keyword,
  cursor,
}: PromotionGoodsParams) => {
  return useInfiniteQuery({
    queryKey: promotionQueryKey.list({ type, promotionType, keyword, cursor }),
    queryFn: ({ pageParam = 0 }) =>
      getPromotionGoodsList({
        type,
        promotionType,
        keyword,
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.pageInfo.totalPages !== lastPage.currentPage
        ? lastPage.nextCursor
        : undefined,
    suspense: true,
    useErrorBoundary: true,
  });
};
