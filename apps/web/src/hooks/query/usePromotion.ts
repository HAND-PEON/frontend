import { useQuery } from '@tanstack/react-query';
import { getPromotionGoods } from '@/apis/promotion';
import { PromotionGoodsParams } from '@/apis/promotion';

const queryKey = {
  all: ['promotion'] as const,
  lists: () => [...queryKey.all, 'list'] as const,
  list: (params: PromotionGoodsParams) =>
    [...queryKey.lists(), params] as const,
  details: () => [...queryKey.all, 'detail'] as const,
  detail: (goodsNo: number) => [...queryKey.details(), goodsNo] as const,
};

export const useGetPromotionGoods = (params: PromotionGoodsParams) => {
  return useQuery({
    queryKey: queryKey.list(params),
    queryFn: () => getPromotionGoods(params),
    suspense: true,
  });
};
