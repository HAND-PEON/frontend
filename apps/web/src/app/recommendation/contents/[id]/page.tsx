import HotTrendCard from '@/components/HotTrendItem';
import { mainHotTrendData } from '@/dummy/hotTrend';

interface ContentsDetailPageProps {
  params: { id: string };
}

export default function ContentsDetailPage({
  params: { id },
}: ContentsDetailPageProps) {
  return (
    <div>
      <div className="flex flex-col gap-5 bg-white p-5">
        <div className="text-[12px] font-normal text-[#939393]">
          편슐랭 가이드 {'>'} 지금 유행
        </div>

        <div className="text-main1 text-[22px] font-bold">
          약과 대란 참전! 편의점에서 맛볼 수 있는 꿀맛 약과 모음.ZIP
        </div>
        <div className="w-fit rounded-[5px] bg-[#F7F7F7] px-2 py-1 text-sm font-medium text-[#939393]">
          2023.07.01 - 2023.07.15
        </div>
      </div>

      <div className="mt-[10px] flex flex-col gap-16 bg-white  px-5  py-[30px] text-[#1E1C1C]">
        <div>
          <div className="text-[15px]">
            한 달 동안 무려 70만개가 팔린 인기 절정의 약과!
            <br /> 강남의 유명 카페인 ‘이웃집 통통이’와 협업한 제품인데요.
            <br /> 커다란 쿠키 위에 묵직한 약과가 올려져 있어 거부할 수 없는
            달달함을 선사합니다.
            <br />
            <br />
            한 달 동안 무려 70만개가 팔린 인기 절정의 약과!
            <br /> 강남의 유명 카페인 ‘이웃집 통통이’와 협업한 제품인데요.
            <br /> 커다란 쿠키 위에 묵직한 약과가 올려져 있어 거부할 수 없는
            달달함을 선사합니다.
            <br />
            <br />
            <div className="h-[290px] bg-[#7EAE89] text-center leading-[290px]">
              사진
            </div>
          </div>
          <div className="mt-6 pr-[5px]">
            <HotTrendCard {...mainHotTrendData[0]} />
          </div>
        </div>
        <div>
          <div className="text-[15px]">
            한 달 동안 무려 70만개가 팔린 인기 절정의 약과!
            <br /> 강남의 유명 카페인 ‘이웃집 통통이’와 협업한 제품인데요.
            <br /> 커다란 쿠키 위에 묵직한 약과가 올려져 있어 거부할 수 없는
            달달함을 선사합니다.
            <br />
            <br />
            한 달 동안 무려 70만개가 팔린 인기 절정의 약과!
            <br /> 강남의 유명 카페인 ‘이웃집 통통이’와 협업한 제품인데요.
            <br /> 커다란 쿠키 위에 묵직한 약과가 올려져 있어 거부할 수 없는
            달달함을 선사합니다.
            <br />
            <br />
            <div className="h-[290px] bg-[#7EAE89] text-center leading-[290px]">
              사진
            </div>
          </div>
          <div className="mt-6 pr-[5px]">
            <HotTrendCard {...mainHotTrendData[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
