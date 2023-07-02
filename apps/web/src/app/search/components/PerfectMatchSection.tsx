import React from 'react';
import { BANNER_DATA } from '@/constants/assets';
import PerfectMatchSlides from './PerfectMatchSlides';
const PerfectMatchSection = () => {
  return (
    <div>
      <p className="pb-[23px] text-[1.375rem]">
        <span>핸드편에서 추천 해주는</span>
        <br /> <span className="font-bold">꿀조합</span> 🐷
      </p>
      <div className="h-[210px] w-full">
        <PerfectMatchSlides data={BANNER_DATA} />
      </div>
    </div>
  );
};

export default PerfectMatchSection;
