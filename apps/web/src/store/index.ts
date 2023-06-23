import { StateCreator, create } from 'zustand';
import { TabBarSlice, createTabBarSlice } from './tabBar';

export type StateCreatorDevTool<T> = StateCreator<
  RootStoreState,
  [],
  [['zustand/devtools', never]],
  T
>;

// type RootStoreState = TabBarSlice && OtherSlice && ....;
export type RootStoreState = TabBarSlice;

export const useStateStore = create<RootStoreState>()((...args) => ({
  ...createTabBarSlice(...args),
}));
