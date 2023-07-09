'use client';

import OneBar from './OneBar';

interface TabBarProps {
  currentIndex: number;
  onClick: (value: number) => void;
}

export default function TabBar({ currentIndex, onClick }: TabBarProps) {
  return (
    <div className="p-5px flex rounded-full bg-white">
      <OneBar isActive={0 === currentIndex} onClick={() => onClick(0)}>
        {0 === currentIndex && '이번주 🔥Hot Trend'}
        {0 !== currentIndex && '이번주 Hot Trend'}
      </OneBar>
      <OneBar isActive={1 === currentIndex} onClick={() => onClick(1)}>
        {1 === currentIndex && '이번주 ⚡행사상품⚡️'}
        {1 !== currentIndex && '이번주 행사상품'}
      </OneBar>
    </div>
  );
}
