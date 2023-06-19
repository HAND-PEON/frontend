interface HotTrendProps {
  convenience: 'ALL' | 'CU' | 'GS25' | '7Eleven' | 'Emart24';
}
export default function HotTrend({ convenience }: HotTrendProps) {
  return <div className="bg-white">{convenience} 이번주 핫트렌드</div>;
}
