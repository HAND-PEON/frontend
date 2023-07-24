import httpClient from '@/http/client';

import {
  HotTrendCategory,
  HotTrendGoods,
  HotTrendGoodsDetail,
  PageInfo,
} from './type';

interface HotTrendGoodsResponse {
  pageInfo: PageInfo | null;
  data: HotTrendGoods[];
}

export const getHotTrendGoods = async (params: HotTrendCategory) => {
  const { data } = await httpClient.get<HotTrendGoodsResponse>(
    '/handpyeon/api/hotTrends',
    {
      params: {
        type: params,
      },
    },
  );
  return data.data;
};

interface HotTrendGoodsDetailResponse {
  pageInfo: PageInfo | null;
  data: HotTrendGoodsDetail;
}

export const getHotTrendGoodsDetail = async (id: number) => {
  const { data } = await httpClient.get<HotTrendGoodsDetailResponse>(
    `/handpyeon/api/hotTrends/${id}`,
  );
  return data.data;
};
