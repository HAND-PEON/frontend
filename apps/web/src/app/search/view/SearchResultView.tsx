'use client';
import { Convenience } from '@/app/type';
import TabCategory from '@/components/TabCategory';
import { CONVENIENCE } from '@/constants/conveniences';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SearchResultList from '../components/SearchResultList';

const SearchResultView = () => {
  const searchParams = useSearchParams();
  const word = searchParams.get('word');
  const category = searchParams.get('category') as Convenience;
  const categoryInfoList = CONVENIENCE.map((convenience) => ({
    category: convenience,
    label: convenience,
    href: `/search?word=${word}&category=${convenience}`,
  }));

  return (
    <div className="flex-1 bg-white pb-[20px]">
      <div className="sticky top-[72px] z-30">
        <TabCategory
          categoryData={categoryInfoList}
          currentCategory={category}
        />
      </div>
      <div className="px-[20px]">
        <Suspense>
          <SearchResultList category={category} word={word} />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchResultView;
