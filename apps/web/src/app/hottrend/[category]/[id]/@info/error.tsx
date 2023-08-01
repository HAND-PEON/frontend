'use client';

import SorryIcon from '@/components/icons/SorryIcon';

export default function Error() {
  return (
    <div className="bg-white px-5 pb-9 pt-5 font-bold">
      <div className="text-xl2 py-10px ">이번주 Hot Trend</div>
      <div className="h-[235px] w-full border-2">
        <div className="flex flex-col items-center p-7">
          <SorryIcon />
          <div className="text-main1 mt-3 text-lg font-bold">
            요청한 컨텐츠를 찾을 수 없어요.
          </div>
        </div>
      </div>
    </div>
  );
}
