import SearchIcon from '@/components/icons/SearchIcon';
import React from 'react';

interface SearchIconButtonProps
  extends React.ComponentProps<typeof SearchIcon>,
    React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const SearchIconButton = ({
  type,
  className,
  ...props
}: SearchIconButtonProps) => {
  return (
    <button className={`mr-[_-8px] p-[8px] ${className}`} {...props}>
      <SearchIcon type={type} />
    </button>
  );
};

export default SearchIconButton;
