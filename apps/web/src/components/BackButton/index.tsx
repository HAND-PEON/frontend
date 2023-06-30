'use client';
import React from 'react';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';
import useGoBack from '@/hooks/useGoBack';

const BackButton = () => {
  const goBack = useGoBack();

  return (
    <button className="ml-[_-8px] p-[8px]" onClick={goBack}>
      <ChevronLeftIcon />
    </button>
  );
};

export default BackButton;
