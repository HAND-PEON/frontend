import BasicHeader from '../BasicHeader';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const BasicLayout = ({ children }: Props) => {
  return (
    <>
      <BasicHeader />
      <div className="flex-1">{children}</div>
    </>
  );
};

export default BasicLayout;
