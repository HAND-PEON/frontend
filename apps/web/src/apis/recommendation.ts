import { RecommendationCategory } from '@/app/type';
import httpClient from '@/http/client';

import {
  PageInfo,
  RecommendationBanner,
  RecommendationDetail,
  RecommendationSummary,
} from './type';

const TRESH_TEXTS = ['http://~', 'https://~', '://~', 'test thumbnail'];
const DEFAULT_BANNER_IMAGE = '/image/banner1.png';

export function checkTreshURL(url: string, alternativeURL: string) {
  if (TRESH_TEXTS.some((text) => url.includes(text))) return alternativeURL;
  if (!url.includes('/')) return alternativeURL;
  return url;
}

interface RecommendationBannersResponse {
  pageInfo: PageInfo | null;
  data: RecommendationBanner[];
}

export const getRecommendationBanners = async () => {
  const { data } = await httpClient.get<RecommendationBannersResponse>(
    '/handpyeon/api/recommends/banners',
  );

  return data.data.map(({ bannerImageUrl, contentsNumber }) => ({
    src: checkTreshURL(bannerImageUrl, DEFAULT_BANNER_IMAGE),
    url: `/recommendation/contents/${contentsNumber}`,
  }));
};

interface RecommendationListParams {
  type: RecommendationCategory;
  subType?: string;
  cursor?: number;
}

interface RecommendationListResponse {
  pageInfo: PageInfo | null;
  data: RecommendationSummary[];
}

export const getRecommendationList = async (
  params: RecommendationListParams,
) => {
  const { data } = await httpClient.get<RecommendationListResponse>(
    '/handpyeon/api/recommends',
    { params },
  );
  return data.data.map((one) => ({
    ...one,
    imageUrl: checkTreshURL(one.imageUrl, DEFAULT_BANNER_IMAGE),
  }));
};

interface RecommendationContentsResponse {
  pageInfo: PageInfo | null;
  data: RecommendationDetail;
}

export const getRecommendationContents = async (id: number) => {
  const { data } = await httpClient.get<RecommendationContentsResponse>(
    `/handpyeon/api/recommends/${id}`,
  );
  return data.data;
};
