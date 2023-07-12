import httpClient from '@/http/client';
import { Convenience, type PromotionGoods } from './type';

export type PromotionGoodsParams = Convenience | 'ALL';

export const getPromotionGoods = async (params: PromotionGoodsParams) => {
  const { data } = await httpClient.get<{ data: PromotionGoods[] }>(
    '/handpyeon/api/promotionGoods',
    {
      params: {
        type: params,
      },
    },
  );
  return data.data;
};
