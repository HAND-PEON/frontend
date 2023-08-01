'use client';

export default function HotTrendInfoLoading() {
  return (
    <div className="animate-pulse select-none bg-white px-5 pb-9 pt-5 font-bold ">
      <div className="text-xl2 py-10px ">이번주 Hot Trend</div>
      <div className="text-slate-200">
        <div className="px-15px  py-9px flex justify-between  border-2 border-slate-200 ">
          <span className="gap-7px flex items-center bg-slate-200 ">
            loading
          </span>
          <span className="bg-slate-200 ">Hot Ranking </span>
        </div>
        <div className="flex border-2 border-slate-200">
          <div>
            <div className="px-17px py-21px break-keep">
              <span className="bg-slate-200 ">loading</span>
            </div>
            <div className="px-17px py-4px border-t-2 border-slate-200 font-medium">
              <div className="bg-slate-200 ">loading</div>
            </div>
          </div>
          <div className="min-w-[152px] flex-1 border-l-2 border-slate-200 p-2">
            <div className="relative flex h-full w-full bg-slate-200"></div>
          </div>
        </div>
        <div className="py-9px px-40px text-15px break-keep border-x-2 border-slate-200  text-center font-medium ">
          <span className="bg-slate-200 ">loading</span>
        </div>
        <div className=" border-2 border-slate-200">
          <div className="p-9px flex w-full items-center justify-center gap-1 ">
            <span className="text-15px bg-slate-200 font-bold ">
              더 알아보기
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
