'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { HotTrendData } from '@/app/dummy';

interface HotTrendDetailFormProps {
  initData?: HotTrendData;
}

export default function HotTrendDetailForm({
  initData,
}: HotTrendDetailFormProps) {
  const pathName = usePathname();

  const [data] = useState<HotTrendData>(initData ?? ({} as HotTrendData));

  return (
    <div className="p-5">
      <div>
        <form method="post" action={`${pathName}/api`}>
          <ul className="overflow-hidden rounded-3xl border-2 border-black">
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'rank'}</li>
                <li className="flex-1  p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.rank}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'convenience'}</li>
                <li className="flex-1  p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.convenience}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'title'}</li>
                <li className="flex-1 p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.title}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'period'}</li>
                <li className="flex-1  p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.period}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'productTitle'}</li>
                <li className="flex-1  p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.productTitle}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'price'}</li>
                <li className="flex-1  p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.price}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'description'}</li>
                <li className="flex-1  p-5">
                  <textarea className="h-full w-full resize-none border">
                    {data.description}
                  </textarea>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex border-b-2 border-slate-400">
                <li className="w-40 bg-slate-300 p-5">{'productImage'}</li>
                <li className="flex-1 p-5">
                  <div>
                    <input
                      className="border-2"
                      type="file"
                      name="productImage"
                    />
                  </div>
                  {!data.productImage ?? (
                    <div className="relative h-[64px] w-full">
                      <Image
                        className="object-contain"
                        src={data.productImage ?? ''}
                        alt="pyeon detail image"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
                        priority
                      />
                    </div>
                  )}
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex">
                <li className="w-40 bg-slate-300 p-5">{'moreURL'}</li>
                <li className="flex-1 p-5">
                  <input
                    className="border-2"
                    type="text"
                    defaultValue={data.moreURL}
                  />
                </li>
              </ul>
            </li>
          </ul>
          <div className="p-5 text-center">
            <button
              type="submit"
              className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 
               text-gray-900 hover:bg-gray-100 hover:text-blue-700 
              focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
