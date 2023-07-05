'use client';
import React, { useState } from 'react';
import BackButton from '../BackButton';
import SearchInput from '../SearchInput';

const SearchHeader = () => {
  const [value, setValue] = useState('');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <div className="relative flex h-[58px] items-center justify-center bg-black px-[20px] text-white">
      <div className="flex w-full items-center">
        <BackButton />
        <div className="flex-1">
          <SearchInput
            size="small"
            placeholder="검색어를 입력해 주세요."
            onChange={handleChangeValue}
            onResetValue={() => setValue('')}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
