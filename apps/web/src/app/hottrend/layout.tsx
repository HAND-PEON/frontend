import BasicLayout from '@/components/BasicLayout';
import HomeIconButton from '@/components/HomeIconButton';
import SearchIconButton from '@/components/SearchIconButton';

interface HotTrendLayoutProps {
  children: React.ReactNode;
}

export default function HotTrendLayout({ children }: HotTrendLayoutProps) {
  return (
    <BasicLayout
      hasBackButton
      headerCenter={'이번주 Hot Trend'}
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton />
        </div>
      }
    >
      {children}
    </BasicLayout>
  );
}
