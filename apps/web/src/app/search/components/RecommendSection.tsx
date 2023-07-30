'use client';
import React from 'react';
import RecommendSlides from './RecommendSlides';
import { useGetRecommendationBanners } from '@/hooks/query/useRecommendation';

const RecommendSection = () => {
  const { data } = useGetRecommendationBanners();
  return (
    <div>
      <div className="pb-[23px]">
        <span className="text-[1.375rem] font-bold text-[#1E1C1C]">
          편슐랭 가이드 📕
        </span>
      </div>
      <div className="h-[210px] w-full">
        <RecommendSlides data={data} />
      </div>
    </div>
  );
};

export default RecommendSection;
