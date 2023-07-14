export type StoreName = 'CU' | 'GS25' | '7ELEVEN' | 'EMART24';
export type PromotionType =
  | 'ONE_PLUS_ONE'
  | 'TWO_PLUS_ONE'
  | 'THREE_PLUS_ONE'
  | 'SALE'
  | 'BONUS'
  | 'PB'
  | 'GIFT';

export interface PromotionGoods {
  goodsNo: number;
  goodsName: string;
  goodsPrice: number;
  goodsImageUrl: string;
  promotionType: PromotionType;
  storeName: StoreName;
}
export type HotTrendCategory = StoreName | 'ALL';

export interface HotTrendGoods {
  rank: number;
  storeName: StoreName;
  goodsName: string;
  goodsPrice: number;
  goodsImageUrl: string;
}
