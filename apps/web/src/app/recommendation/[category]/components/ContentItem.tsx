import Image from 'next/image';
import Link from 'next/link';

interface ContentItemProps {
  href: string;
  imageURL: string;
  subTitle: string;
  mainTitle: string;
}

export default function ContentItem({
  href,
  imageURL,
  subTitle,
  mainTitle,
}: ContentItemProps) {
  return (
    <Link href={href}>
      <div className="border-main1 overflow-hidden rounded-lg border-2">
        <div className="relative  min-h-[122px]">
          <Image
            src={imageURL}
            alt={''}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="px-10px py-15px">
          <div className="text-main1 text-[12px] font-medium">{subTitle}</div>
          <div className="text-main1 text-[15px] font-bold">{mainTitle}</div>
        </div>
      </div>
    </Link>
  );
}
