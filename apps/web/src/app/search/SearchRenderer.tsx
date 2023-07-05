'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import SearchResultView from './view/SearchResultView';
import SearchView from './view/SearchView';

const SearchRenderer = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('word');
  return (
    <React.Fragment>
      {search ? <SearchResultView /> : <SearchView />}
    </React.Fragment>
  );
};

export default SearchRenderer;
