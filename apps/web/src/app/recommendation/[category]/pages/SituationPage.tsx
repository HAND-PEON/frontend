import { RecommendationCategory } from '@/app/type';

interface SituationPageProps {
  category: RecommendationCategory;
}

export default function SituationPage({ category }: SituationPageProps) {
  return (
    <div>
      <div className="mt-6 text-[22px] font-medium">상황별 추천</div>
    </div>
  );
}
