import { prefixZero } from '@/utils/numberFormatter';

interface RankBoxProps {
  rank: number;
}

export default function RankBox({ rank }: RankBoxProps) {
  return (
    <div className="bg-[#1E1C1C] p-2 text-[19px] font-extrabold leading-5 text-white">
      {prefixZero(rank)}
    </div>
  );
}
