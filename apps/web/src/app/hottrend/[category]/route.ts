import { getHotTrendGoods } from '@/apis/hotTrend';
import { HotTrendGoods, StoreName } from '@/apis/type';
import { Convenience } from '@/app/type';
import { HotTrendMapping } from '@/constants/conveniences';
import { redirect } from 'next/navigation';

const convenience: Omit<Convenience, 'ALL'>[] = [
  'CU',
  'GS25',
  '7Eleven',
  'Emart24',
];

function isConvenience(value): value is Omit<Convenience, 'ALL'> {
  return convenience.includes(value);
}

export async function GET(request: Request) {
  const category = request.url.split('/').pop();
  if (!isConvenience(category)) {
    return redirect('/main/ALL');
  }

  const hotTrendRankList = await getHotTrendGoods(HotTrendMapping[category]);
  hotTrendRankList.sort((a, b) => (+a.rank < +b.rank ? -1 : 1));

  let hotTrendDetailId = null;
  if (hotTrendRankList.length > 0) {
    hotTrendDetailId = hotTrendRankList[0].id;
  }

  return redirect(`/hottrend/${category}/${hotTrendDetailId}`);
}
