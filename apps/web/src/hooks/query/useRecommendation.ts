import {
  getRecommendationBanners,
  getRecommendationContents,
  getRecommendationList,
} from '@/apis/recommendation';
import { RecommendationCategory } from '@/app/type';
import { extractTruthyValues } from '@/utils/extractValues';
import { useQuery } from '@tanstack/react-query';

export interface RecommendationListParams {
  category: RecommendationCategory;
  subCategory?: string;
  cursor?: number;
}

const queryKeyRecommendtaion = ['recommendation'] as const;
const queryKeyRecommendationList = (params: RecommendationListParams) =>
  [...queryKeyRecommendtaion, 'list', ...extractTruthyValues(params)] as const;
const queryKeyRecommendationDetail = (id: number) => [
  ...queryKeyRecommendtaion,
  'contents',
  id,
];
const queryKeyBannerRecommendationList = () =>
  [...queryKeyRecommendtaion, 'list', 'banner'] as const;

export const useGetRecommendationList = (params: RecommendationListParams) => {
  const queryParams = {
    type: params.category,
    subType: params.subCategory,
    cursor: params.cursor,
  };

  return useQuery({
    queryKey: queryKeyRecommendationList(params),
    queryFn: () => getRecommendationList(queryParams),
    useErrorBoundary: true,
  });
};

export const useGetRecommendationContents = () => {
  return useQuery({
    queryKey: queryKeyBannerRecommendationList(),
    queryFn: () => getRecommendationBanners(),
    suspense: true,
    useErrorBoundary: true,
  });
};
