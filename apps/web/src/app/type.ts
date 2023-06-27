export type Convenience = 'ALL' | 'CU' | 'GS25' | '7Eleven' | 'Emart24';

/**
 * 숫자를 천단위 마다 콤마로 변환
 */
export const formatNumberWithComma = (n: number) => {
  return n.toLocaleString('ko-KR');
};
