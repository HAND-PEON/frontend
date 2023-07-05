'use client';
import React from 'react';
import SearchIcon from '../icons/SearchIcon';
import XcircleIcon from '../icons/XcircleIcon';

interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean;
  placeholder?: string;
  onClick?: () => void;
  onResetValue?: () => void;
  onSearch?: () => void;
  size?: 'small' | 'normal';
}

const sizeClasses = {
  small: 'h-[37px]',
  normal: 'h-[48px]',
} as const;

export default function SearchInput({
  onClick,
  onSearch,
  size = 'normal',
  onResetValue,
  ...props
}: SearchInputProps) {
  const inputSize = sizeClasses[size];

  return (
    <div
      className={`relative flex w-full items-center justify-between rounded-full bg-white pl-[20px] pr-[80px] text-[17px] ${inputSize}`}
      onClick={onClick}
    >
      <input
        type="text"
        className="placeholder-[#D9D9D9]} w-full bg-transparent text-black"
        {...props}
      />
      <div className="absolute right-[10px] flex">
        {props.value && (
          <button className="p-2" onClick={onResetValue}>
            <XcircleIcon />
          </button>
        )}

        <button className="p-1" onClick={onSearch}>
          <SearchIcon type="black" />
        </button>
      </div>
    </div>
  );
}
