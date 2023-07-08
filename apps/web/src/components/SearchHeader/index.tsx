'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import BackButton from '../BackButton';
import SearchInput from '../SearchInput';

const SearchHeader = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const word = searchParams.get('word');
  const category = searchParams.get('category');

  const [searchValue, setSearchValue] = useState(word ? word : '');
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    router.push(
      `/search?word=${searchValue}&category=${category ? category : 'ALL'}`,
    );
  };
  return (
    <div className="relative flex h-[72px] items-center justify-center bg-black px-[20px] text-white">
      <div className="flex w-full items-center">
        <BackButton />
        <div className="flex-1">
          <SearchInput
            placeholder="검색어를 입력해 주세요."
            onChange={handleChangeValue}
            onResetValue={() => setSearchValue('')}
            onSearch={() => handleSearch()}
            onKeyDown={(e) => handleKeydown(e)}
            value={searchValue}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
