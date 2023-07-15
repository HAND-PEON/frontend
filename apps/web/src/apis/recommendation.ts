import httpClient from '@/http/client';

import { RecommendationBanner } from './type';

export const getRecommendationBanners = async () => {
  const { data } = await httpClient.get<{ data: RecommendationBanner[] }>(
    '/handpyeon/api/banners/recommend',
  );

  return data.data.map(({ bannerImage, contentsNumber }) => ({
    src: bannerImage,
    url: `/recommendation/contents/${contentsNumber}`,
  }));
};
