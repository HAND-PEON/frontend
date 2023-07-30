'use client';

import { ReactNode } from 'react';

interface CategoryPageProps {
  params: { id: string };
  children: ReactNode;
  info: ReactNode;
  rank: ReactNode;
}

export default function HotTrendCategoryRankInfoPage({
  params: { id },
  children,
  info,
  rank,
}: CategoryPageProps) {
  return (
    <>
      {id.toString() !== 'null' && info}
      {rank}
      {children}
    </>
  );
}
