import httpClient from '@/http/client';
import type { PromotionGoods, PromotionGoodsCategory } from './type';

export type PromotionGoodsParams = PromotionGoodsCategory;

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
