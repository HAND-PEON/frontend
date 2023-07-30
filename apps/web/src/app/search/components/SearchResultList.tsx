import { PromotionGoodsCategory } from '@/apis/type';
import { Convenience } from '@/app/type';
import EventItemCard from '@/components/EventItemCard';
import { EventMapping } from '@/constants/conveniences';
import {
  useGetFirstPagePromotionGoodsList,
  useGetPromotionGoodsList,
} from '@/hooks/query/usePromotion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface SearchResultListProps {
  category: Convenience;
  word: string;
}

const mappingSegments: Record<PromotionGoodsCategory, Convenience> = {
  ALL: 'ALL',
  CU: 'CU',
  GS25: 'GS25',
  SEVEN11: '7Eleven',
  EMART24: 'Emart24',
} as const;

const SearchResultList = ({ category, word }: SearchResultListProps) => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetPromotionGoodsList({
    type: EventMapping[category],
    keyword: word,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && data?.pages) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <div className="pb-[25px] pt-[40px] text-xl font-bold">
        <span>{`${data?.pages[0].pageInfo.totalElements}개의 검색결과`}</span>
      </div>
      <div className="flex flex-wrap items-start justify-start gap-x-[18px] gap-y-[50px]">
        {data?.pages[0].data.length ? (
          data.pages.map((page) =>
            page.data.map((promotion, idx) => (
              <EventItemCard
                key={`${idx}-${promotion.goodsNo}`}
                eventItem={{
                  eventType: promotion.promotionType,
                  imageUrl: promotion.goodsImageUrl,
                  price: promotion.goodsPrice,
                  title: promotion.goodsName,
                  goodsNo: promotion.goodsNo,
                  convenience: mappingSegments[promotion.storeName],
                }}
              />
            )),
          )
        ) : (
          <div> 상품이 없습니다. </div>
        )}
      </div>
      {isFetchingNextPage ? <div>Loading...</div> : <div ref={ref} />}
    </>
  );
};

export default SearchResultList;
