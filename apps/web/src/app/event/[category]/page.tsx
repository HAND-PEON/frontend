import { Convenience } from '@/app/type';
import React from 'react';
import EventItemSection from './components/EventItemSection';

interface EventCategoryPageProps {
  params: { category: Convenience };
}

const EventCategoryPage = ({
  params: { category },
}: EventCategoryPageProps) => {
  return <EventItemSection category={category} />;
};

export default EventCategoryPage;
