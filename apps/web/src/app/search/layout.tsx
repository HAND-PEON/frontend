import React from 'react';
import SearchLayout from '@/components/SearchLayout';

interface SearchPageLayoutProps {
  children: React.ReactNode;
}

const SearchPageLayout = ({ children }: SearchPageLayoutProps) => {
  return <SearchLayout>{children}</SearchLayout>;
};

export default SearchPageLayout;
