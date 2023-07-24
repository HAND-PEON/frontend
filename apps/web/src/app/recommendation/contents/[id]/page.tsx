'use client';

import Image from 'next/image';

import Loading from '@/components/Loading';
import { useGetRecommendationContents } from '@/hooks/query/useRecommendation';

import ContentsDetailCard from './ContentsDetailCard';

interface ContentsDetailPageProps {
  params: { id: number };
}

const categoryNames = {
  honey: '꿀조합',
  now: '지금 유행',
  situation: '상황별 추천',
};

export default function ContentsDetailPage({
  params: { id },
}: ContentsDetailPageProps) {
  const { isLoading, data } = useGetRecommendationContents(id);

  if (isLoading) {
    return (
      <div className="bg-white p-5">
        <Loading />
      </div>
    );
  }

  const {
    title,
    recommendType,
    recommendStartDate,
    recommendEndDate,
    contentsList,
  } = data;

  return (
    <div>
      <div className="flex flex-col gap-5 bg-white p-5">
        <div className="text-[12px] font-normal text-[#939393]">
          편슐랭 가이드 {'>'} {categoryNames[recommendType]}
        </div>

        <div className="text-main1 text-[22px] font-bold">{title}</div>
        <div className="w-fit rounded-[5px] bg-[#F7F7F7] px-2 py-1 text-sm font-medium text-[#939393]">
          {recommendStartDate} - {recommendEndDate}
        </div>
      </div>

      <div className="mt-[10px] flex flex-col gap-16 bg-white  px-5  py-[30px] text-[#1E1C1C]">
        {contentsList &&
          contentsList.map((contents, idx) => (
            <div key={`${idx}`}>
              <div className="text-[15px]">
                {contents.content}
                {contents.contentsImageUrls.map((one, idx) => (
                  <div key={idx} className="relative h-[290px]">
                    <Image
                      className="object-contain"
                      sizes="(min-width: 768px) 100vw, (max-width: 1200px) 100vw"
                      priority
                      src={one}
                      alt={`contentsImages-${idx}`}
                      fill
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 pr-[5px]">
                <ContentsDetailCard {...contents.goodsInfo} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
