import HoneyTextIcon from '@/components/icons/HoneyTextIcon';
import Image from 'next/image';
import Link from 'next/link';

interface ContentItemProps {
  href: string;
  imageURL: string;
  subTitle: string;
  mainTitle: string;
}

export default function HoneyContentItem({
  href,
  imageURL,
  subTitle,
  mainTitle,
}: ContentItemProps) {
  return (
    <Link href={href}>
      <div className="border-main1 border-2">
        <div className="relative min-h-[122px]">
          <Image src={imageURL} alt={''} fill className="object-cover" />
        </div>
        <div className="p-15px flex items-center gap-[15px]">
          <div className="flex">
            <HoneyTextIcon />
          </div>
          <div className=" flex-1">
            <div className="text-main1 text-sm font-medium">{subTitle}</div>
            <div className="text-main1 text-[22px] font-bold">{mainTitle}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
