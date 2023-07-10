import React from 'react';
import SearchRenderer from './SearchRenderer';
import SearchLayout from '@/components/SearchLayout';

const SearchPage = () => {
  return (
    <SearchLayout>
      <SearchRenderer />
    </SearchLayout>
  );
};

export default SearchPage;
