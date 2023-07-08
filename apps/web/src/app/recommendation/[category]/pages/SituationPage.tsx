import { RecommendationCategory } from '@/app/type';
import ContentItem from '../components/ContentItem';

interface SituationPageProps {
  category: RecommendationCategory;
}

export default function SituationPage({ category }: SituationPageProps) {
  return (
    <div>
      <div className="mt-6 text-[22px] font-medium">상황별 추천</div>
      <div className="mt-[30px] flex flex-wrap justify-between gap-y-10 [&>*]:w-[calc(50%-7px)]">
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
        <ContentItem
          subTitle="맛있게 살빼고 싶은 사람"
          mainTitle="다이어트 레시피"
          imageURL={''}
        />
      </div>
    </div>
  );
}
