'use client';

import SearchIconButton from '../SearchIconButton';
import SearchIcon from '../icons/SearchIcon';

interface SearchInputProps {
  disabled?: boolean;
  placeholder?: string;
  onClick?: () => void;
  onSearch?: () => void;
}

export default function SearchInput({
  onClick,
  onSearch,
  ...props
}: SearchInputProps) {
  return (
    <div
      className="mt-[18px] flex h-[48px] items-center justify-between rounded-full bg-white px-[20px] text-[17px]"
      onClick={onClick}
    >
      <input
        type="text"
        className="placeholder-[#dddddd]} w-full bg-transparent"
        {...props}
      />
      <SearchIconButton type="black" />
    </div>
  );
}
