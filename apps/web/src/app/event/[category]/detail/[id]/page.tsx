import { Convenience } from '@/app/type';
import TopButton from '@/components/TopButton';
import React, { Suspense } from 'react';
import EventItemDetailSection from './components/EventItemDetailSection';
import EventItemTotalSection from './components/EventItemTotalSection';
import LoadingIndicator from '@/components/LoadingIndicator';
import ApiErrorBoundary from '@/components/ApiErrorBoundary';

interface EventItemDetailPageProps {
  params: { category: Convenience; id: string };
}

const EventItemDetailPage = ({
  params: { category, id },
}: EventItemDetailPageProps) => {
  return (
    <div>
      <div className="border-b border-[#D7D7D7] bg-white">
        <Suspense fallback={<LoadingIndicator />}>
          <EventItemDetailSection goodsNo={Number(id)} />
        </Suspense>
      </div>
      <div className="mt-[15px] bg-white">
        <EventItemTotalSection />
      </div>
      <div className="fixed bottom-7 right-6 z-50 ml-auto mr-auto">
        <TopButton />
      </div>
    </div>
  );
};

export default EventItemDetailPage;
