'use client';
import React, { useState } from 'react';
import { ChipContext } from './hooks/context';

interface Props {
  children: React.ReactNode[];
}

const ChipMain = ({ children }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <ChipContext.Provider value={{ currentIndex, setCurrentIndex }}>
      <div className="flex gap-2">{children}</div>
    </ChipContext.Provider>
  );
};

export default ChipMain;

{
  /**
   * const a = ['1+1','1+2','1+3']
   * a.map((item, index) => (<ChipItem myIndex={index} onClickChipItem={}/>))
   */
  /* <Chip>
  <ChipItem>1+3</ChipItem>
  <ChipItem>1+2</ChipItem>
  <ChipItem>1+1</ChipItem>
</Chip> 
ChipItem입장에서는 렌더링된 순서를 알 수가 없음

Chip은 그저 active라는 상태를 받아야 함...


*/
}
