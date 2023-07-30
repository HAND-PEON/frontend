'use client';

import { HotTrendCardSkeletons } from '@/components/HotTrendItem';

export default function HotTrendRankListLoading() {
  return (
    <div className="mt-4 bg-white px-5 py-9">
      <div className="text-xl2   font-bold  ">
        <div className="flex items-center">
          <span className="bg-slate-200 text-slate-200">이번주 loading</span>
        </div>
        <div>
          <span className="bg-slate-200 text-slate-200">Hot Trend 랭킹</span>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        <HotTrendCardSkeletons length={3} />
      </div>
    </div>
  );
}
