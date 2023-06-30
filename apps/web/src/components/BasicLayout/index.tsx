'use client';
import useGoBack from '@/hooks/useGoBack';
import BasicHeader from '../BasicHeader';
import React from 'react';
import BackButton from '../BackButton';

interface Props extends React.ComponentProps<typeof BasicHeader> {
  children: React.ReactNode;
  hasBackButton?: boolean;
}

const BasicLayout = ({
  children,
  hasBackButton,
  headerCenter,
  headerRight,
}: Props) => {
  const goBack = useGoBack();
  return (
    <>
      <div className="sticky top-0 z-30">
        <BasicHeader
          headerCenter={headerCenter}
          headerLeft={
            hasBackButton ? <BackButton onClick={goBack} /> : undefined
          }
          headerRight={headerRight}
        />
      </div>
      <div className="flex-1">{children}</div>
    </>
  );
};

export default BasicLayout;
