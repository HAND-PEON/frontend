import { devtools } from 'zustand/middleware';

import { Convenience } from '@/app/type';
import { create } from 'zustand';

type CategoryTabIndexes = Record<Convenience, number>;

interface TabBarStoreState {
  categoryTabIndexes: CategoryTabIndexes;
  setCategoryTabIndex: (currentIndexList: Partial<CategoryTabIndexes>) => void;
}

const initTabState: CategoryTabIndexes = {
  ALL: 0,
  CU: 0,
  GS25: 0,
  '7Eleven': 0,
  Emart24: 0,
};

export const useTabBarStore = create<TabBarStoreState>()(
  devtools((set) => ({
    categoryTabIndexes: initTabState,
    setCategoryTabIndex: (updatedTabIndex) =>
      set(
        ({ categoryTabIndexes: categoryTabIndex }) => ({
          categoryTabIndexes: { ...categoryTabIndex, ...updatedTabIndex },
        }),
        false,
        'tabBar/setCategoryTabIndex',
      ),
  })),
);

export const selectTabIndex =
  (category: Convenience) => (state: TabBarStoreState) =>
    state.categoryTabIndexes[category];
