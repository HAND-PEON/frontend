'use client';

import { ReactNode, useState } from 'react';

import OneCategory from './OneCategory';

export type CategoryInfo = {
  label: string;
  href?: string;
  children?: ReactNode;
};

interface TabCategoryProps {
  data: CategoryInfo[];
}

export default function TabCategory({ data }: TabCategoryProps) {
  const [currentCategory, setCurrentCategory] = useState(data[0].label);
  const currentChildren = data.find(
    (one) => one.label === currentCategory,
  )?.children;

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
      {currentChildren && <div>{currentChildren}</div>}
    </div>
  );
}
