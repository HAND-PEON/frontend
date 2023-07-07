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
      headerCenter={'편슐랭 가이드'}
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton type="white" />
        </div>
      }
    >
      {children}
    </BasicLayout>
  );
}
