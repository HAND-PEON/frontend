import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const useGoHome = () => {
  const router = useRouter();
  const goHome = useCallback(() => {
    router.push('/main/ALL');
  }, [router]);
  return goHome;
};

export default useGoHome;
