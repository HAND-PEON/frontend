'use client';
import React from 'react';
import BasicHeader from '../BasicHeader';
import SearchHeader from '../SearchHeader';
import HandpyeonTextIcon from '../icons/HandpyeonTextIcon';

interface Props extends React.ComponentProps<typeof BasicHeader> {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex h-[46px] w-full items-center justify-center bg-white">
        <div className="flex items-center justify-center gap-2">
          <span className="text-base font-bold text-[#1E1C1C]">
            오늘 1+1 행사 상품이 궁금할 땐,
          </span>
          <HandpyeonTextIcon />
        </div>
      </div>
      <div className="sticky top-0 z-30">
        <SearchHeader />
      </div>
      <div className="bg-[#F7F7F7]] flex flex-1 flex-col">{children}</div>
    </>
  );
};

export default SearchLayout;
