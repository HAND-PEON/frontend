'use client';

import { ReactNode, useState } from 'react';
import { useTabBarStore } from './[category]/page';
import TabBar from '@/components/TabBar';

interface CategoryChildrenProps {
  index: number;
  children?: ReactNode;
}

export default function CategoryChildren({
  index,
  children,
}: CategoryChildrenProps) {
  const indexList = useTabBarStore((state) => state.currentIndexList);
  const currentIndex = indexList[index];

  const setCurrentIndexList = useTabBarStore(
    (state) => (state as any).setCurrentIndexList,
  );

  const handleTabBarClick = (currentIndex: number) => {
    setCurrentIndexList(
      indexList.map((one, idx) => (idx === index ? currentIndex : one)),
    );
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="px-[20px] py-[19px]">
        <TabBar
          currentIndex={currentIndex}
          onClick={(currentIndex) => handleTabBarClick(currentIndex)}
        />
      </div>
      <div>
        {currentIndex === 0 && children[0]}
        {currentIndex === 1 && children[1]}
      </div>
    </div>
  );
}
