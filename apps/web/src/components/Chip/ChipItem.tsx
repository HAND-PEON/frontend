'use client';
import React from 'react';
import { useChipContext } from './hooks/context';

interface Props {
  onClickChipItem?: () => void;
  myIndex: number;
  children: React.ReactNode;
}

const ChipItem = ({ onClickChipItem, myIndex, children }: Props) => {
  const { currentIndex, setCurrentIndex } = useChipContext();
  return (
    <div
      className={`w-min rounded-[20px] border border-[#1E1C1C] px-[13px] py-[6px] hover:cursor-pointer ${
        currentIndex === myIndex ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      onClick={() => {
        setCurrentIndex(myIndex);
        onClickChipItem?.();
      }}
    >
      <span className="truncate font-bold">{children}</span>
    </div>
  );
};

export default ChipItem;
