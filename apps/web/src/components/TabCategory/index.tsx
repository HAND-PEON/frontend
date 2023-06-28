'use client';

import { ReactNode, useMemo, useState } from 'react';

import { Convenience } from '@/app/type';

import OneCategory from './OneCategory';

export type CategoryInfo = {
  label: string;
  href?: string;
};

interface TabCategoryProps {
  categoryData: CategoryInfo[];
  currentCategory: Convenience;
}

export default function TabCategory({
  categoryData,
  currentCategory,
}: TabCategoryProps) {
  return (
    <div className="sticky top-0 z-30 bg-white ">
      <div className="flex border-b-[1px] border-[#EEEEEE] bg-white px-5">
        {categoryData.map(({ label, href }) => (
          <OneCategory
            key={label}
            href={href}
            isActive={label === currentCategory}
          >
            {label}
          </OneCategory>
        ))}
      </div>
    </div>
  );
}
