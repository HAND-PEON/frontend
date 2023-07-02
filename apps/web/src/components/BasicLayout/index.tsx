import React from 'react';
import BackButton from '../BackButton';
import BasicHeader from '../BasicHeader';
import SearchHeader from '../SearchHeader';

interface Props extends React.ComponentProps<typeof BasicHeader> {
  children: React.ReactNode;
  hasBackButton?: boolean;
  hasSearchHeader?: boolean;
}

const BasicLayout = ({
  children,
  hasBackButton,
  headerCenter,
  headerRight,
  hasSearchHeader = false,
}: Props) => {
  return (
    <>
      <div className="sticky top-0 z-30">
        {hasSearchHeader ? (
          <SearchHeader />
        ) : (
          <BasicHeader
            headerCenter={headerCenter}
            headerLeft={hasBackButton ? <BackButton /> : undefined}
            headerRight={headerRight}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col bg-[#F7F7F7]">{children}</div>
    </>
  );
};

export default BasicLayout;
