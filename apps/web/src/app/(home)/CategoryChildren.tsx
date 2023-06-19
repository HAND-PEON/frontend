'use client';

import { ReactNode, useState } from 'react';

import TabBar from '@/components/TabBar';

interface CategoryChildrenProps {
  children: ReactNode;
}

export default function CategoryChildren({ children }: CategoryChildrenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="bg-[#F7F7F7]">
      <div className="px-[20px] py-[19px]">
        <TabBar
          currentIndex={currentIndex}
          onClick={(index) => {
            setCurrentIndex(index);
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
