'use client';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const useGoBack = () => {
  const router = useRouter();
  const goBack = useCallback(() => {
    router.back();
  }, [router]);
  return goBack;
};

export default useGoBack;
