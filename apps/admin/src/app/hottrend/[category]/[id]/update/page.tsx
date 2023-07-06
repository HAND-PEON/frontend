import { getHotTrendDataById } from '@/app/dummy';

import HotTrendDetailForm from '../../../components/HotTrendDetailForm';

interface HotTrendUpdatePageProps {
  params: { id: string };
}

export default function HotTrendUpdatePage({
  params: { id },
}: HotTrendUpdatePageProps) {
  const data = getHotTrendDataById(id);
  return <HotTrendDetailForm initData={data} />;
}
