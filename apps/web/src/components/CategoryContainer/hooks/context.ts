'use client';
import React, { createContext } from 'react';

export type SelectContexetType = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const ChipContext = createContext<SelectContexetType>(undefined);

export const useChipContext = () => {
  const context = React.useContext(ChipContext);

  if (context === undefined) {
    throw new Error('useChipContext must be used within a <Chip />');
  }
  return context;
};
