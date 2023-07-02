import SearchIcon from '@/components/icons/SearchIcon';
import Link from 'next/link';
import React from 'react';

interface SearchIconButtonProps
  extends React.ComponentProps<typeof SearchIcon> {}

const SearchIconButton = ({ type }: SearchIconButtonProps) => {
  return (
    <Link href="/search">
      <button className={`mr-[_-8px] p-[8px]`}>
        <SearchIcon type={type} />
      </button>
    </Link>
  );
};

export default SearchIconButton;
