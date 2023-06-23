import { devtools } from 'zustand/middleware';

import { Convenience } from '@/app/type';

import { RootStoreState, StateCreatorDevTool } from './';

type TabBarIndexs = Record<Convenience, number>;

export interface TabBarSlice {
  tabBarIndexs: TabBarIndexs;
  setCategoryTabIndex: (currentIndexList: Partial<TabBarIndexs>) => void;
}

const initTabState: TabBarIndexs = {
  ALL: 0,
  CU: 0,
  GS25: 0,
  '7Eleven': 0,
  Emart24: 0,
};

export const createTabBarSlice: StateCreatorDevTool<TabBarSlice> = devtools(
  (set) => ({
    tabBarIndexs: initTabState,
    setCategoryTabIndex: (updatedTabIndex) =>
      set(
        ({ tabBarIndexs: categoryTabIndex }) => ({
          tabBarIndexs: { ...categoryTabIndex, ...updatedTabIndex },
        }),
        false,
        'tabBar/setCategoryTabIndex',
      ),
  }),
);

export const selectTabIndex =
  (category: Convenience) => (state: RootStoreState) =>
    state.tabBarIndexs[category];
