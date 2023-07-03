import { Convenience } from '@/app/type';

type MainHotTrendInfo = {
  id: string | number;
  rank: number;
  imageUrl: string;
  price: number;
  title: string;
  convenience: Convenience;
};

export const mainHotTrendData: MainHotTrendInfo[] = [
  {
    id: 1,
    rank: 1,
    imageUrl: '/image/8809196615577.jpg',
    price: 5000,
    title: '백종원의 연탄불고기',
    convenience: 'CU',
  },
  {
    id: 2,
    rank: 1,
    imageUrl: '/image/8801007423180.jpg',
    price: 5000,
    title: '햇반컵반 강된장 보리비빔밥',
    convenience: 'GS25',
  },
  {
    id: 3,
    rank: 1,
    imageUrl: '/image/MzE2MTE=.jpg',
    price: 5000,
    title: '혜장라면',
    convenience: '7Eleven',
  },
  {
    id: 4,
    rank: 1,
    imageUrl: '/image/671843.jpg',
    price: 5000,
    title: '빙그레 딸기타임',
    convenience: 'Emart24',
  },
  {
    id: 5,
    rank: 2,
    imageUrl: '/image/GD_2800100153426_001.jpg',
    price: 5000,
    title: '캐나다 한끼스테이크',
    convenience: 'CU',
  },
  {
    id: 6,
    rank: 2,
    imageUrl: '/image/GD_8801056150013_007.jpg',
    price: 5000,
    title: '펩시 500ml 캔',
    convenience: 'GS25',
  },
];

type HotTrendInfo = {
  id: string | number;
  rank: number;
  imageUrl: string;
  price: number;
  title: string;
  convenience: Convenience;
  hottrendTitle: string;
  hottrendContent: string;
  moreUrl?: string;
};

export const hotTrendInfoData: HotTrendInfo[] = [
  {
    id: 1,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/8809196615577.jpg',
    price: 5000,
    title: '백종원의 연탄불고기',
    convenience: 'CU',
  },
  {
    id: 2,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/8801007423180.jpg',
    price: 5000,
    title: '햇반컵반 강된장 보리비빔밥',
    convenience: 'GS25',
  },
  {
    id: 3,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/MzE2MTE=.jpg',
    price: 5000,
    title: '혜장라면',
    convenience: '7Eleven',
  },
  {
    id: 4,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/671843.jpg',
    price: 5000,
    title: '빙그레 딸기타임',
    convenience: 'Emart24',
  },
  {
    id: 5,
    rank: 2,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/GD_2800100153426_001.jpg',
    price: 5000,
    title: '캐나다 한끼스테이크',
    convenience: 'CU',
  },
  {
    id: 6,
    rank: 2,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    imageUrl: '/image/GD_8801056150013_007.jpg',
    price: 5000,
    title: '펩시 500ml 캔',
    convenience: 'GS25',
  },
];
