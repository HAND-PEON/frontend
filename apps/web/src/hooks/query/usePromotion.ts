import { useQuery } from '@tanstack/react-query';
import { type PromotionGoodsParams, getPromotionGoods } from '@/apis/promotion';

export const promotionQueryKey = {
  all: ['promotion'] as const,
  lists: () => [...promotionQueryKey.all, 'list'] as const,
  list: (params: PromotionGoodsParams) =>
    [...promotionQueryKey.lists(), params] as const,
  details: () => [...promotionQueryKey.all, 'detail'] as const,
  detail: (goodsNo: number) =>
    [...promotionQueryKey.details(), goodsNo] as const,
};

export const useGetPromotionGoods = ({
  type,
  keyword,
  cursor,
}: PromotionGoodsParams) => {
  return useQuery({
    queryKey: promotionQueryKey.list({ type, keyword, cursor }),
    queryFn: () => getPromotionGoods({ type, keyword, cursor }),
    suspense: true,
    useErrorBoundary: true,
  });
};
