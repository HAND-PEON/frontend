import httpClient from '@/http/client';

import { HotTrendCategory, HotTrendGoods } from './type';

export const getHotTrendGoods = async (params: HotTrendCategory) => {
  const { data } = await httpClient.get<{ data: HotTrendGoods[] }>(
    '/handpyeon/api/hotTrends',
    {
      params: {
        type: params,
      },
    },
  );
  return data.data;
};
