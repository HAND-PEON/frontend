import React from 'react';

interface Props {
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerCenter?: React.ReactNode;
}

const BasicHeader = ({ headerLeft, headerRight, headerCenter }: Props) => {
  return (
    <div className="relative flex h-[58px] items-center justify-center bg-black text-white">
      {headerLeft && <div className="absolute left-[20px]">{headerLeft}</div>}

      <span className="text-lg font-bold text-white">{headerCenter}</span>
      {headerRight && (
        <div className="absolute right-[20px]">{headerRight}</div>
      )}
    </div>
  );
};

export default BasicHeader;
