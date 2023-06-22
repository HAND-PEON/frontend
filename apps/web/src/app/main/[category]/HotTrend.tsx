import { Convenience } from '../../type';

interface HotTrendProps {
  convenience: Convenience;
}

export default function HotTrend({ convenience }: HotTrendProps) {
  return <div className="bg-white">{convenience} 이번주 핫트렌드</div>;
}
