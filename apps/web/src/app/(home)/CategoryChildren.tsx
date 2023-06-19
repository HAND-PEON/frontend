'use client';

import { ReactNode, useEffect, useState } from 'react';

import TabBar from '@/components/TabBar';

interface CategoryChildrenProps {
  index: number;
  children: ReactNode;
}

export default function CategoryChildren({
  index,
  children,
}: CategoryChildrenProps) {
  const [currentIndexList, setCurrentIndexList] = useState([0, 0, 0, 0, 0]);
  const currentIndex = currentIndexList[index];

  return (
    <div className="bg-[#F7F7F7]">
      <div className="px-[20px] py-[19px]">
        <TabBar
          currentIndex={currentIndex}
          onClick={(tabIndex) => {
            setCurrentIndexList((prev) =>
              prev.map((one, idx) => (idx === index ? tabIndex : one)),
            );
          }}
        />
      </div>
      <div>
        {currentIndex === 0 && children[0]}
        {currentIndex === 1 && children[1]}
      </div>
    </div>
  );
}
