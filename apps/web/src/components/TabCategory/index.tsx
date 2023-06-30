'use client';

import { Convenience } from '@/app/type';
import OneCategory from './OneCategory';

export type CategoryInfo = {
  label: string;
  href?: string;
};

interface TabCategoryProps {
  categoryData: CategoryInfo[];
  currentCategory: Convenience;
  isRouterReplace?: boolean;
}

export default function TabCategory({
  categoryData,
  currentCategory,
  isRouterReplace = false,
}: TabCategoryProps) {
  return (
    <div className="bg-white ">
      <div className="flex border-b-[1px] border-[#EEEEEE] bg-white px-5">
        {categoryData.map(({ label, href }) => (
          <OneCategory
            key={label}
            href={href}
            isActive={label === currentCategory}
            isRouterReplace={isRouterReplace}
          >
            {label}
          </OneCategory>
        ))}
      </div>
    </div>
  );
}
