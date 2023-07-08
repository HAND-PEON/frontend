import HoneyTextIcon from '@/components/icons/HoneyTextIcon';
import Image from 'next/image';

interface ContentItemProps {}

export default function ContentItem(props: ContentItemProps) {
  return (
    <div className="border-main1 border-2">
      <div className="min-h-[122px] bg-[#73F69D]">
        <Image src={''} alt={''} />
      </div>
      <div className="px-10px py-15px">
        <div className="text-main1 text-[12px] font-medium">
          집에서 분위기 낼 수 있는
        </div>
        <div className="text-main1 text-[15px] font-bold">하이볼 레시피</div>
      </div>
    </div>
  );
}
