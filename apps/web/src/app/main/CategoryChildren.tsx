'use client';

import { ReactNode } from 'react';

import TabBar from '@/components/TabBar';
import { selectTabIndex, useTabBarStore } from '@/store';

import { Convenience } from '../type';

interface CategoryChildrenProps {
  convenience: Convenience;
  children: ReactNode;
}

export default function CategoryChildren({
  convenience,
  children,
}: CategoryChildrenProps) {
  const currentIndex = useTabBarStore(selectTabIndex(convenience));
  const setCategoryTabIndex = useTabBarStore(
    (state) => state.setCategoryTabIndex,
  );

  const handleTabBarClick = (index: number) =>
    setCategoryTabIndex({ [convenience]: index });

  return (
    <div>
      <div className="sticky top-[53px] z-auto bg-[#F7F7F7] px-[20px] py-[19px]">
        <TabBar currentIndex={currentIndex} onClick={handleTabBarClick} />
      </div>
      <div>{children[currentIndex]}</div>
    </div>
  );
}
