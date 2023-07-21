import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  type PromotionGoodsParams,
  getPromotionGoodsList,
  getPromotionGoods,
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

export const useGetPromotionGoods = (goodsNo: number) => {
  return useQuery({
    queryKey: promotionQueryKey.detail(goodsNo),
    queryFn: () => getPromotionGoods(goodsNo),
    suspense: true,
    useErrorBoundary: true,
  });
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
      lastPage.pageInfo.totalPages !== lastPage.nextCursor
        ? lastPage.nextCursor
        : undefined,
    suspense: true,
    useErrorBoundary: true,
  });
};

export const useGetFirstPagePromotionGoodsList = ({
  type,
}: PromotionGoodsParams) => {
  return useQuery({
    queryKey: promotionQueryKey.list({
      type,
    }),
    queryFn: () =>
      getPromotionGoodsList({
        type,
      }),
    suspense: true,
    useErrorBoundary: true,
  });
};
