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
  promotionType,
  keyword,
  cursor,
}: PromotionGoodsParams) => {
  return useQuery({
    queryKey: promotionQueryKey.list({ type, promotionType, keyword, cursor }),
    queryFn: () => getPromotionGoods({ type, promotionType, keyword, cursor }),
    suspense: true,
    useErrorBoundary: true,
  });
};
