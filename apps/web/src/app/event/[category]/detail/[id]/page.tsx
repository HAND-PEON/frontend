'use client';
import { Convenience } from '@/app/type';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';
import LoadingIndicator from '@/components/LoadingIndicator';
import TopButton from '@/components/TopButton';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import EventItemDetailSection from './components/EventItemDetailSection';
import EventItemTotalSection from './components/EventItemTotalSection';

interface EventItemDetailPageProps {
  params: { category: Convenience; id: string };
}

const EventItemDetailPage = ({
  params: { category, id },
}: EventItemDetailPageProps) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <div>
      <ApiErrorBoundary onReset={reset}>
        <Suspense fallback={<LoadingIndicator />}>
          <div className="border-b border-[#D7D7D7] bg-white">
            <EventItemDetailSection goodsNo={Number(id)} />
          </div>
          <div className="mt-[15px] bg-white">
            <EventItemTotalSection category={category} />
          </div>
        </Suspense>
      </ApiErrorBoundary>
      <div className="fixed bottom-7 right-6 z-50 ml-auto mr-auto">
        <TopButton />
      </div>
    </div>
  );
};

export default EventItemDetailPage;
