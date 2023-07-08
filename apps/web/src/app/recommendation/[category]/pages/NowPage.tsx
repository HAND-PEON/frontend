import { RecommendationCategory } from '@/app/type';

interface NowPageProps {
  category: RecommendationCategory;
}

export default function NowPage({ category }: NowPageProps) {
  return (
    <div>
      <div className="mt-10 text-[22px] font-medium">지금 유행하는건 뭐지?</div>
    </div>
  );
}
