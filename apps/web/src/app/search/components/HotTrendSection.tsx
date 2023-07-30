import React from 'react';
import { useGetHotTrendGoods } from '@/hooks/query/useHotTrends';
import { getRandomFromArray } from '@/utils/getRandomFromArray';
import { CONVENIENCE } from '@/constants/conveniences';

const HotTrendSection = () => {
  const a = getRandomFromArray(CONVENIENCE);

  return (
    <div>
      <p className="text-[1.375rem]">
        <span>
          이번주 [{' '}
          <span className="px-1 shadow-[inset_0_-0.8rem_0_0_#E2F982]">CU</span>{' '}
          ]
        </span>
        <span className="font-bold">&nbsp;Hot Trend</span>🔥
      </p>
      <ul className="flex flex-col gap-[22px] pt-[25px]">
        {dummy.map((item, i) => (
          <li className={i < 3 && `font-bold`} key={i}>
            <div className="flex justify-start gap-5">
              <span>{i + 1}</span>
              <span className="w-full truncate">{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotTrendSection;
