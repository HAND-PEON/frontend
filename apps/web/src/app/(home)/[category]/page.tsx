import React from 'react';
import HotTrend from '../HotTrend';
import DiscountItems from '../DiscountItems';
import type { Convenience } from '@/app/type';
import CategoryChildren from '../CategoryChildren';
import TabCategory from '@/components/TabCategory';
import { create } from 'zustand';

interface Props {
  params: { category: Convenience };
}

const conveniences: Convenience[] = ['ALL', 'CU', 'GS25', '7Eleven', 'Emart24'];

interface TabBarStoreState {
  currentIndexList: number[];
  setCurrentIndexList: (currentIndexList: number[]) => void;
}

export const useTabBarStore = create<TabBarStoreState>((set) => ({
  currentIndexList: Array.from({ length: conveniences.length }, () => 0),
  setCurrentIndexList: (currentIndexList) =>
    set((state) => ({ currentIndexList: currentIndexList })),
}));

const categoryInfoList = conveniences.map((name) => ({
  label: name,
  href: `/${name}`,
}));

const CategoryPage = ({ params }: Props) => {
  const currentCategoryPageIndex = conveniences.findIndex(
    (convenience) => convenience === params.category,
  );

  return (
    <div>
      <TabCategory data={categoryInfoList} currentTab={params.category} />
      <CategoryChildren index={currentCategoryPageIndex}>
        <HotTrend convenience={params.category} />
        <DiscountItems convenience={params.category} />
      </CategoryChildren>
    </div>
  );
};

export default CategoryPage;
