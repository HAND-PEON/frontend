import { RecommendationCategory } from '@/app/type';
import ContentItem from '../components/ContentItem';

interface NowPageProps {
  category: RecommendationCategory;
}

export default function NowPage({ category }: NowPageProps) {
  return (
    <div>
      <div className="mt-10 text-[22px] font-medium">지금 유행하는건 뭐지?</div>
      <div className="mt-[30px] flex flex-wrap justify-between gap-y-10 [&>*]:w-[calc(50%-7px)]">
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    </div>
  );
}
