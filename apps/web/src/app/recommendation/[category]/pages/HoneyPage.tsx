'use client';

import { RecommendationCategory } from '@/app/type';
import { useGetRecommendationList } from '@/hooks/query/useRecommendation';

import ContentItem from '../components/HoneyContentItem';

interface HoneyPageProps {
  category: RecommendationCategory;
}

export default function HoneyPage({ category }: HoneyPageProps) {
  const { data } = useGetRecommendationList({ category });

  return (
    <div>
      <div className="mt-10 text-[22px] font-medium">
        <div>뻔한 재료들의 놀라운 변신</div>
        <div>편의점 꿀조합</div>
      </div>
      <div className="mb-[50px] mt-[30px] flex flex-col gap-[30px]">
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
