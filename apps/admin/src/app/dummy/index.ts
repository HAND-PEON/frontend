import { Convenience } from '../hottrend/[category]/page';

export interface HotTrendData {
  rank: number | string;
  id: number | string;
  convenience: string;
  title: string;
  period: string;
  productTitle: string;
  price: string;
  description: string;
  productImage: string;
  moreURL: string;
  createdAt: string;
}

export function getHotTrendDataById(id: string | number) {
  return hotTrendDataList.find((one) => one.id == Number(id));
}

export function getHotTrendDataByCategory(category: Convenience) {
  return hotTrendDataList.filter((one) => one.convenience === category);
}

export const hotTrendDataList = [
  {
    rank: '1',
    id: 1,
    convenience: 'GS25',
    title: ' 오픈런의 주인공! 아사히 생맥',
    period: '23.06.12-23.06.18',
    productTitle: ' Asahi Super Dry',
    price: ' 4,500원',
    description:
      '설명 캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    productImage: '/image/8809196615577.jpg',
    moreURL: '/hottrend/1',
    createdAt: '23.06.10',
  },
  {
    rank: '2',
    id: 2,
    convenience: 'GS25',
    title: ' 오픈런의 주인공! 아사히 생맥',
    period: '23.06.12-23.06.18',
    productTitle: ' Asahi Super Dry',
    price: ' 4,500원',
    description:
      '설명 캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    productImage: '/image/8809196615577.jpg',
    moreURL: '/hottrend/2',
    createdAt: '23.06.10',
  },
  {
    rank: '1',
    id: 3,
    convenience: 'CU',
    title: ' 오픈런의 주인공! 아사히 생맥',
    period: '23.06.12-23.06.18',
    productTitle: ' Asahi Super Dry',
    price: ' 4,500원',
    description:
      '설명 캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    productImage: '/image/8809196615577.jpg',
    moreURL: '/hottrend/3',
    createdAt: '23.06.10',
  },
  {
    rank: '2',
    id: 4,
    convenience: 'CU',
    title: ' 오픈런의 주인공! 아사히 생맥',
    period: '23.06.12-23.06.18',
    productTitle: ' Asahi Super Dry',
    price: ' 4,500원',
    description:
      '설명 캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    productImage: '/image/8809196615577.jpg',
    moreURL: '/hottrend/4',
    createdAt: '23.06.10',
  },
];
