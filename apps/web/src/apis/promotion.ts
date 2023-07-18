import httpClient from '@/http/client';
import type { PromotionGoods, PromotionGoodsCategory } from './type';

export interface PromotionGoodsParams {
  type: PromotionGoodsCategory;
  keyword?: string;
  cursor?: number;
}

export const getPromotionGoods = async (params: PromotionGoodsParams) => {
  const { data } = await httpClient.get<{ data: PromotionGoods[] }>(
    '/handpyeon/api/promotionGoods',
    {
      params,
    },
  );
  return data.data;
};
