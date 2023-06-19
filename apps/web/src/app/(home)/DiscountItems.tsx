interface HotTrendProps {
  convenience: 'ALL' | 'CU' | 'GS25' | '7Eleven' | 'Emart24';
}

export default function DiscountItems({ convenience }: HotTrendProps) {
  return <div>{convenience} 이번주 할인 품목</div>;
}
