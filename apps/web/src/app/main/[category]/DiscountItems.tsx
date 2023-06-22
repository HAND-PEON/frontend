import { Convenience } from '../../type';

interface HotTrendProps {
  convenience: Convenience;
}

export default function DiscountItems({ convenience }: HotTrendProps) {
  return <div>{convenience} 이번주 할인 품목</div>;
}
