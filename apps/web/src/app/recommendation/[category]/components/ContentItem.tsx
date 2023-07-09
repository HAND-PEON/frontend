import HoneyTextIcon from '@/components/icons/HoneyTextIcon';
import Image from 'next/image';

interface ContentItemProps {
  imageURL: string;
  subTitle: string;
  mainTitle: string;
}

export default function ContentItem({
  imageURL,
  subTitle,
  mainTitle,
}: ContentItemProps) {
  return (
    <div className="border-main1 border-2">
      <div className="min-h-[122px] bg-[#73F69D]">
        <Image src={imageURL} alt={''} />
      </div>
      <div className="px-10px py-15px">
        <div className="text-main1 text-[12px] font-medium">{subTitle}</div>
        <div className="text-main1 text-[15px] font-bold">{mainTitle}</div>
      </div>
    </div>
  );
}
