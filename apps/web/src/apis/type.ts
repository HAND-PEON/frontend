export type StoreName = 'CU' | 'GS25' | 'SEVEN11' | 'EMART24';
export type PromotionType =
  | 'ONE_PLUS_ONE'
  | 'TWO_PLUS_ONE'
  | 'THREE_PLUS_ONE'
  | 'SALE'
  | 'BONUS'
  | 'PB'
  | 'GIFT';

export type PromotionGoodsCategory = StoreName | 'ALL';
export interface PromotionGoods {
  goodsNo: number;
  goodsName: string;
  goodsPrice: number;
  goodsImageUrl: string;
  promotionType: PromotionType;
  storeName: StoreName;
}
export interface PromotionGoodsList {
  data: PromotionGoods[];
  pageInfo: {
    totalElements: number;
    totalPages: number;
  };
}

export type HotTrendCategory = StoreName | 'ALL';

export interface HotTrendGoods {
  id: number;
  rank: number;
  storeName: StoreName;
  goodsName: string;
  goodsPrice: number;
  goodsImageUrl: string;
}

export interface HotTrendGoodsDetail extends HotTrendGoods {
  title: string;
  content: string;
  linkUrl: string;
}

export interface RecommendationBanner {
  id: number;
  bannerImageUrl: string;
  contentsNumber: number;
}

export interface RecommendationSummary {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
}

export interface RecommendationDetailContent {
  id: number;
  content: string;
  contentsImageUrls: string[];
  goodsInfo: PromotionGoods;
}

export interface RecommendationDetail {
  id: number;
  recommendType: string;
  title: string;
  recommendStartDate: string;
  recommendEndDate: string;
  contentsList: RecommendationDetailContent[];
}

export interface PageInfo {
  totalElements: number;
  totalPages: number;
}
