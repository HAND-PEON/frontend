'use client';

import { useState } from 'react';

import { RecommendationCategory } from '@/app/type';
import Chip from '@/components/Chip';
import { useGetRecommendationList } from '@/hooks/query/useRecommendation';

import ContentItem from '../components/ContentItem';

interface SituationPageProps {
  category: RecommendationCategory;
}

const subCategoryKeyList = ['exercise', 'nightFood', 'homeParty', 'broadcast'];
const subCategoryNameList = ['💪🏻운동', '🌝야식', '🎉홈파티', '방송'];

export default function SituationPage({ category }: SituationPageProps) {
  const [subCategory, setSubCategory] = useState(subCategoryKeyList[0]);
  const { data } = useGetRecommendationList({ category, subCategory });

  return (
    <div>
      <div className="mt-6 text-[22px] font-medium">상황별 추천</div>
      <div className="mt-5">
        <Chip>
          {subCategoryKeyList.map((item, index) => (
            <Chip.Item
              myIndex={index}
              key={index}
              onClickChipItem={() => setSubCategory(item)}
            >
              {subCategoryNameList[index]}
            </Chip.Item>
          ))}
        </Chip>
      </div>
      <div className="mb-[50px] mt-[17px] flex flex-wrap justify-between gap-y-10 [&>*]:w-[calc(50%-7px)]">
        {data &&
          data.map(({ id, title, subTitle, imageUrl }, idx) => (
            <ContentItem
              key={`${idx}-${id}`}
              href={`/recommendation/contents/${id}`}
              imageURL={imageUrl}
              subTitle={subTitle}
              mainTitle={title}
            />
          ))}
      </div>
    </div>
  );
}
