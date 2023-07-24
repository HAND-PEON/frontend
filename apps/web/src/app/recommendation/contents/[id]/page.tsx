'use client';

import HotTrendCard from '@/components/HotTrendItem';
import Loading from '@/components/Loading';
import { useGetRecommendationContents } from '@/hooks/query/useRecommendation';

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
                <div className="h-[290px] bg-[#7EAE89] text-center leading-[290px]">
                  사진
                  {/* TODO: 임시 데이터에 Image가 깨지는 문제가 있어서 추후 수정 */}
                </div>
              </div>
              <div className="mt-6 pr-[5px]">
                <HotTrendCard
                  rank={idx + 1}
                  id={contents.goodsInfo.goodsNo}
                  {...contents.goodsInfo}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
