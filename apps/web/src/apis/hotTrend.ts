import httpClient from '@/http/client';

import { HotTrendCategory, HotTrendGoods, PageInfo } from './type';

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
