/**
 * 숫자를 천단위 마다 콤마로 변환
 */
export const formatNumberWithComma = (n: number) => {
  return n.toLocaleString('ko-KR');
};
/**
 * maxLength까지 텍스트 0으로 채움
 */
export const prefixZero = (value: number, maxLength = 2) => {
  return value.toString().padStart(maxLength, '0');
};
