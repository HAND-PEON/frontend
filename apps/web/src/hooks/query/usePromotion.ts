import { useQuery } from '@tanstack/react-query';
import { getPromotionGoods } from '@/apis/promotion';
import { PromotionGoodsParams } from '@/apis/promotion';

export const promotionQueryKey = {
  all: ['promotion'] as const,
  lists: () => [...promotionQueryKey.all, 'list'] as const,
  list: (params: PromotionGoodsParams) =>
    [...promotionQueryKey.lists(), params] as const,
  details: () => [...promotionQueryKey.all, 'detail'] as const,
  detail: (goodsNo: number) =>
    [...promotionQueryKey.details(), goodsNo] as const,
};

export const useGetPromotionGoods = (params: PromotionGoodsParams) => {
  return useQuery({
    queryKey: promotionQueryKey.list(params),
    queryFn: () => getPromotionGoods(params),
  });
};
