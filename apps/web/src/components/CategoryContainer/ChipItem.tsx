'use client';
import React from 'react';
import { useChipContext } from './hooks/context';

interface Props {
  onClickChipItem?: () => void;
  myIndex: number;
  text: string;
}

const ChipItem = ({ onClickChipItem, myIndex, text }: Props) => {
  const { currentIndex, setCurrentIndex } = useChipContext();
  return (
    <div
      className={`py-[6px] px-[13px] border border-[#1E1C1C] w-min rounded-[20px] hover:cursor-pointer ${
        currentIndex === myIndex ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      onClick={() => {
        setCurrentIndex(myIndex);
        console.log('hello');
      }}
    >
      <span className="font-bold truncate">{text}</span>
    </div>
  );
};

export default ChipItem;
