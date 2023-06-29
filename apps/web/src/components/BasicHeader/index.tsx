import React from 'react';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import SearchIcon from '../icons/SearchIcon';
import HomeIcon from '../icons/HomeIcon';

const BasicHeader = () => {
  return (
    <div className="relative flex items-center justify-center bg-black p-[20px] text-white">
      <div className="absolute left-[20px]">
        <ChevronLeftIcon />
      </div>
      <span className="text-lg font-bold text-white">이번주 행사 품목</span>
      <div className="absolute right-[20px] flex items-center gap-[18px]">
        <HomeIcon />
        <SearchIcon type="black" />
      </div>
    </div>
  );
};

export default BasicHeader;
