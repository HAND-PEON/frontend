'use client';

import { ReactNode, useState } from 'react';

import MatchDisplay from '@/components/MatchDisplay';
import TabBar from '@/components/TabBar';

interface CategoryChildrenProps {
  index: number;
  children: ReactNode;
}

export default function CategoryChildren({
  index,
  children,
}: CategoryChildrenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#F7F7F7]">
      <div className="px-[20px] py-[19px]">
        <TabBar
          currentIndex={currentIndex}
          onClick={(tabIndex) => {
            setCurrentIndex(tabIndex);
          }}
        />
      </div>
      <MatchDisplay
        value={`${currentIndex}`}
        cases={{
          0: children[0],
          1: children[1],
        }}
      />
    </div>
  );
}
