import httpClient from '@/http/client';
import type {
  PromotionGoodsCategory,
  PromotionGoodsList,
  PromotionType,
} from './type';

export interface PromotionGoodsParams {
  type: PromotionGoodsCategory;
  promotionType?: PromotionType;
  keyword?: string;
  cursor?: number;
}

export const getPromotionGoodsList = async (params: PromotionGoodsParams) => {
  const {
    data: { data, pageInfo },
  } = await httpClient.get<PromotionGoodsList>(
    '/handpyeon/api/promotionGoods',
    {
      params,
    },
  );
  return {
    data,
    pageInfo,
    nextCursor: params.cursor + 1,
  };
};
