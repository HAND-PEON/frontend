'use client';

import OneBar from './OneBar';

interface TabBarProps {
  currentIndex: number;
  onClick: (value: number) => void;
}

export default function TabBar({ currentIndex, onClick }: TabBarProps) {
  return (
    <div className="flex rounded-full bg-white p-[5px]">
      <OneBar isActive={0 === currentIndex} onClick={() => onClick(0)}>
        이번주 Hot Trend
      </OneBar>
      <OneBar isActive={1 === currentIndex} onClick={() => onClick(1)}>
        이번주 ⚡할인품목⚡️
      </OneBar>
    </div>
  );
}
