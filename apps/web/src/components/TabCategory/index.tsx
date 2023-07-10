'use client';

import OneCategory from './OneCategory';

export type CategoryInfo<T> = {
  category: T;
  label: string;
  href?: string;
};

interface TabCategoryProps<T> {
  categoryData: CategoryInfo<T>[];
  currentCategory: T;
  isRouterReplace?: boolean;
}

export default function TabCategory<T>({
  categoryData,
  currentCategory,
  isRouterReplace = false,
}: TabCategoryProps<T>) {
  return (
    <div className="bg-white ">
      <div className="flex border-b-[1px] border-[#EEEEEE] bg-white px-5">
        {categoryData.map(({ category, label, href }) => (
          <OneCategory
            key={label}
            href={href}
            isActive={category === currentCategory}
            isRouterReplace={isRouterReplace}
          >
            {label}
          </OneCategory>
        ))}
      </div>
    </div>
  );
}
