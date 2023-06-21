'use client';

import { ReactNode, useMemo, useState } from 'react';

import { arrayToObj } from '@/utils';

import MatchDisplay from '../MatchDisplay';
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
  const labelChildrenObj = useMemo(
    () => arrayToObj(data, 'label', 'children'),
    [data],
  );

  return (
    <div className="bg-white">
      <div className="sticky top-0 z-auto flex border-b-[1px] border-[#EEEEEE] bg-white px-5">
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
      <MatchDisplay value={currentCategory} cases={labelChildrenObj} />
    </div>
  );
}
