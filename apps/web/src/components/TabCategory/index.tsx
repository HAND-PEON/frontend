'use client';

import { Convenience } from '@/app/type';
import OneCategory from './OneCategory';

export type CategoryInfo<T> = {
  label: T;
  href?: string;
};

interface TabCategoryProps<T> {
  categoryData: CategoryInfo<T>[];
  currentCategory: Convenience;
  isRouterReplace?: boolean;
}

export default function TabCategory<T extends string>({
  categoryData,
  currentCategory,
  isRouterReplace = false,
}: TabCategoryProps<T>) {
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
