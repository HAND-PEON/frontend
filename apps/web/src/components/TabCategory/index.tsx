'use client';

import { ReactNode, useState } from 'react';

import OneCategory from './OneCategory';

export type CategoryInfo = {
  label: string;
  href?: string;
};

interface TabCategoryProps {
  data: CategoryInfo[];
  currentTab: string;
}

export default function TabCategory({ data, currentTab }: TabCategoryProps) {
  const [currentCategory, setCurrentCategory] = useState(currentTab);
  // const currentChildren = data.find(
  //   (one) => one.label === currentCategory,
  // )?.children;

  return (
    <div className="bg-white">
      <div className="flex border-b-[1px] border-[#EEEEEE] px-5">
        {data.map(({ label, href }) => (
          <OneCategory
            key={label}
            href={href}
            isActive={label === currentCategory}
            onClick={() => {
              setCurrentCategory(label);
            }}
          >
            {label}
          </OneCategory>
        ))}
      </div>
      {/* 이쪽에서 currentChildren 하나 제외한 나머지는 unmount 시켜서 state 유지가 안 되고 있음 */}
      {/* {currentChildren && <div>{currentChildren}</div>} */}
    </div>
  );
}
