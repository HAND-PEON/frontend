import React from 'react';
import BackButton from '../BackButton';
import BasicHeader from '../BasicHeader';

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
}: Props) => {
  return (
    <>
      <div className="sticky top-0 z-30">
        <BasicHeader
          headerCenter={headerCenter}
          headerLeft={hasBackButton ? <BackButton /> : undefined}
          headerRight={headerRight}
        />
      </div>
      <div className="flex flex-1 flex-col bg-[#F7F7F7]">{children}</div>
    </>
  );
};

export default BasicLayout;
