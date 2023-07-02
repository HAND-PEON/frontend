import { Convenience } from '@/app/type';
import { EventType } from '@/app/type';

export const CONVENIENCE: Convenience[] = [
  'ALL',
  'CU',
  'GS25',
  '7Eleven',
  'Emart24',
];

export const EVENT_TYPE_LIST = ['1+1', '2+1', '할인', '+덤'];

export const EVENT_TYPE_MAP: Record<EventType, { text: string; bg: string }> = {
  ONE_PLUS_ONE: { text: '1+1', bg: 'bg-[#73F69D]' },
  TWO_PLUS_ONE: { text: '2+1', bg: 'bg-[#E2F981]' },
  SALE: { text: '할인', bg: 'bg-[#FFA8A5]' },
  BONUS: { text: '+덤', bg: 'bg-[#C29DF6]' },
} as const;
