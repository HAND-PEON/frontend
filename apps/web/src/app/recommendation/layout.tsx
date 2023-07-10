'use client';

import { usePathname } from 'next/navigation';

import BasicLayout from '@/components/BasicLayout';
import HomeIconButton from '@/components/HomeIconButton';
import SearchIconButton from '@/components/SearchIconButton';

interface RecommendationLayoutProps {
  children: React.ReactNode;
}

export default function RecommendationLayout({
  children,
}: RecommendationLayoutProps) {
  const pathname = usePathname();
  const headerText = pathname.includes('/recommendation/contents')
    ? ''
    : '편슐랭 가이드';

  return (
    <BasicLayout
      hasBackButton
      headerCenter={headerText}
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton type="white" />
        </div>
      }
    >
      <div className="h-full">{children}</div>
    </BasicLayout>
  );
}
