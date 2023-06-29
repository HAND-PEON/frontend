import React from 'react';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import SearchIcon from '../icons/SearchIcon';
import HomeIcon from '../icons/HomeIcon';

const BasicHeader = () => {
  return (
    <div className="flex items-center justify-between bg-black p-[20px] text-white">
      <ChevronLeftIcon />
      <span className="text-lg font-bold text-white">이번주 행사 품목</span>
      <div className="flex">
        <HomeIcon />
        <SearchIcon type={'white'} />
      </div>
    </div>
  );
};

// color: #FFF;
// text-align: center;
// font-size: 17px;
// font-family: Pretendard;
// font-style: normal;
// font-weight: 700;
// line-height: 21px;

export default BasicHeader;
