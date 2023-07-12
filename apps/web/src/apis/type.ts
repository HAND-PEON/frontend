export type Convenience = 'CU' | 'GS25' | '7ELEVEN' | 'EMART24';
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
  storeName: Convenience;
}
