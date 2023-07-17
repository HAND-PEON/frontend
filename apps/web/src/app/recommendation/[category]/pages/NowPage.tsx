'use client';

import { RecommendationCategory } from '@/app/type';
import { useGetRecommendationList } from '@/hooks/query/useRecommendation';

import ContentItem from '../components/ContentItem';

interface NowPageProps {
  category: RecommendationCategory;
}

export default function NowPage({ category }: NowPageProps) {
  const { data } = useGetRecommendationList({ category });

  return (
    <div>
      <div className="mt-10 text-[22px] font-medium">지금 유행하는건 뭐지?</div>
      <div className="mb-[50px] mt-[30px] flex flex-wrap justify-between gap-y-10 [&>*]:w-[calc(50%-7px)]">
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
