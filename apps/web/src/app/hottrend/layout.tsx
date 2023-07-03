import BasicLayout from '@/components/BasicLayout';
import HomeIconButton from '@/components/HomeIconButton';
import SearchIconButton from '@/components/SearchIconButton';

interface HotTrendLayoutProps {
  children: React.ReactNode;
}

export default function HotTrendLayout({ children }: HotTrendLayoutProps) {
  return (
    <div className="min-w-[360px] max-w-[390px] flex-1">
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
    </div>
  );
}
