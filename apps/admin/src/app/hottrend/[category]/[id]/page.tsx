import Image from 'next/image';
import Link from 'next/link';

import { getHotTrendDataById } from '@/app/dummy';

interface HotTrendIdPageProps {
  params: { category: string; id: string };
}

export default function HotTrendIdPage({
  params: { category, id },
}: HotTrendIdPageProps) {
  const oneData = getHotTrendDataById(id);

  if (!oneData) return <div>{id} 에 해당하는 데이터가 없습니다.</div>;

  return (
    <div className="p-5">
      <div>
        <ul className="overflow-hidden rounded-3xl border-2 border-black">
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'rank'}</li>
              <li className="flex-1  p-5">{oneData.rank}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'convenience'}</li>
              <li className="flex-1  p-5">{oneData.convenience}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'title'}</li>
              <li className="flex-1  p-5">{oneData.title}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'period'}</li>
              <li className="flex-1  p-5">{oneData.period}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'productTitle'}</li>
              <li className="flex-1  p-5">{oneData.productTitle}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'price'}</li>
              <li className="flex-1  p-5">{oneData.price}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'description'}</li>
              <li className="flex-1  p-5">{oneData.description}</li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'productImage'}</li>
              <li className="relative flex-1 ">
                <Image
                  className="object-contain"
                  src={oneData.productImage}
                  alt="pyeon detail image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                  priority
                />
              </li>
            </ul>
          </li>
          <li className="">
            <ul className="flex border-b-2 border-black last:border-none ">
              <li className="w-40 bg-slate-300 p-5">{'moreURL'}</li>
              <li className="flex-1 p-5">
                <Link href={oneData.moreURL}>{oneData.moreURL}</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <Link href={`/hottrend/${category}/${oneData.id}/update`}>
          수정하기
        </Link>
      </div>
    </div>
  );
}
