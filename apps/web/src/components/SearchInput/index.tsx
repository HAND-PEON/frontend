'use client';

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
      className="mt-[18px] flex h-[48px] items-center justify-between rounded-full bg-white px-[20px] text-[17px] placeholder-[#dddddd]"
      onClick={onClick}
    >
      <input type="text" {...props} />
      <button onClick={onSearch}>
        <SearchIcon type={'black'} />
      </button>
    </div>
  );
}
