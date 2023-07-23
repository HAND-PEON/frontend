import { RecommendationCategory } from '@/app/type';
import httpClient from '@/http/client';

import {
  PageInfo,
  RecommendationBanner,
  RecommendationDetail,
  RecommendationSummary,
} from './type';

const TRESH_TEXTS = ['http://~', 'https://~', '://~'];
const DEFAULT_BANNER_IMAGE = '/image/banner1.png';

function checkTreshURL(url: string) {
  if (TRESH_TEXTS.some((text) => url.includes(text)))
    return DEFAULT_BANNER_IMAGE;
  return url;
}

interface RecommendationBannersResponse {
  pageInfo: PageInfo | null;
  data: RecommendationBanner[];
}

export const getRecommendationBanners = async () => {
  const { data } = await httpClient.get<RecommendationBannersResponse>(
    '/handpyeon/api/banners/recommend',
  );

  return data.data.map(({ bannerImageUrl, contentsNumber }) => ({
    src: checkTreshURL(bannerImageUrl),
    url: `/recommendation/contents/${contentsNumber}`,
  }));
};

interface RecommendationListParams {
  type: RecommendationCategory;
  subType?: string;
  cursor?: number;
}

export const getRecommendationList = async (
  params: RecommendationListParams,
) => {
  const { data } = await httpClient.get<{ data: RecommendationSummary[] }>(
    '/handpyeon/api/recommends',
    { params },
  );
  return data.data;
};

export const getRecommendationContents = async (id: number) => {
  const { data } = await httpClient.get<{ data: RecommendationDetail }>(
    `/handpyeon/api/recommends/${id}`,
  );
  return data.data;
};
