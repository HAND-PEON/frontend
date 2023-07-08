'use client';
import React from 'react';
import BasicHeader from '../BasicHeader';
import SearchHeader from '../SearchHeader';
import useScrollDriectionDetect from '@/hooks/useScrollDriectionDetect';

interface Props extends React.ComponentProps<typeof BasicHeader> {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: Props) => {
  const isScrollDown = useScrollDriectionDetect();
  return (
    <>
      <div className="flex h-[46px] w-full items-center justify-center bg-white">
        <span className="text-base font-bold text-[#1E1C1C]">
          오늘 1+1 행사 상품이 궁금할 땐,{' '}
          <span className="text-[1.36856rem] font-bold text-[#1E1C1C]">
            핸드편
          </span>
        </span>
      </div>
      <div className={`${isScrollDown ? 'relative' : 'sticky top-0 z-30'}`}>
        <SearchHeader />
      </div>
      <div className="flex flex-1 flex-col bg-[#F7F7F7]">{children}</div>
    </>
  );
};

export default SearchLayout;
