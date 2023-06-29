'use client';
import React, { useState } from 'react';
import { ChipContext } from './hooks/context';

interface Props {
  children: React.ReactNode[];
}

const ChipMain = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <ChipContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <div className="flex gap-2">{children}</div>
    </ChipContext.Provider>
  );
};

export default ChipMain;
