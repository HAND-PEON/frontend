import BasicLayout from '@/components/BasicLayout';
import React from 'react';
import SearchRenderer from './SearchRenderer';

const SearchPage = () => {
  return (
    <BasicLayout hasSearchHeader>
      <SearchRenderer />
    </BasicLayout>
  );
};

export default SearchPage;
