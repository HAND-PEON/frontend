'use client';

import ErrorSorry from '@/components/ErrorSorry';

export default function Error() {
  return (
    <ErrorSorry
      redirectUrl="/main/ALL"
      buttonText="홈으로 돌아가기"
      mainText="요청한 컨텐츠를 찾을 수 없어요."
    />
  );
}
