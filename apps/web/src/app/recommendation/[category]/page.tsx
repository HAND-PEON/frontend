import HoneyPage from './pages/HoneyPage';
import NowPage from './pages/NowPage';
import SituationPage from './pages/SituationPage';

export default function RecommendationCategoryPage({ params: { category } }) {
  return (
    <div>
      {category === 'honey' && <HoneyPage category={category} />}
      {category === 'now' && <NowPage category={category} />}
      {category === 'situation' && <SituationPage category={category} />}
    </div>
  );
}
