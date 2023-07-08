import HoneyTextIcon from '@/components/icons/HoneyTextIcon';
import Image from 'next/image';

interface ContentItemProps {}

export default function HoneyContentItem(props: ContentItemProps) {
  return (
    <div className="border-main1 border-2">
      <div className="min-h-[122px] bg-[#E2F981]">
        <Image src={''} alt={''} />
      </div>
      <div className="p-15px flex items-center gap-[15px]">
        <div className="flex">
          <HoneyTextIcon />
        </div>
        <div className=" flex-1">
          <div className="text-main1 text-sm font-medium">
            편의점 꿀조합의 정석!
          </div>
          <div className="text-main1 text-[22px] font-bold">마크정식</div>
        </div>
      </div>
    </div>
  );
}
