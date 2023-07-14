import { StoreName } from '@/apis/type';

type MainHotTrendInfo = {
  id: string | number;
  rank: number;
  goodsImageUrl: string;
  goodsPrice: number;
  goodsName: string;
  storeName: StoreName;
};

export const mainHotTrendData: MainHotTrendInfo[] = [
  {
    id: 1,
    rank: 1,
    goodsImageUrl: '/image/8809196615577.jpg',
    goodsPrice: 5000,
    goodsName: '백종원의 연탄불고기',
    storeName: 'CU',
  },
  {
    id: 2,
    rank: 1,
    goodsImageUrl: '/image/8801007423180.jpg',
    goodsPrice: 5000,
    goodsName: '햇반컵반 강된장 보리비빔밥',
    storeName: 'GS25',
  },
  {
    id: 3,
    rank: 1,
    goodsImageUrl: '/image/MzE2MTE=.jpg',
    goodsPrice: 5000,
    goodsName: '혜장라면',
    storeName: '7ELEVEN',
  },
  {
    id: 4,
    rank: 1,
    goodsImageUrl: '/image/671843.jpg',
    goodsPrice: 5000,
    goodsName: '빙그레 딸기타임',
    storeName: 'EMART24',
  },
  {
    id: 5,
    rank: 2,
    goodsImageUrl: '/image/GD_2800100153426_001.jpg',
    goodsPrice: 5000,
    goodsName: '캐나다 한끼스테이크',
    storeName: 'CU',
  },
  {
    id: 6,
    rank: 2,
    goodsImageUrl: '/image/GD_8801056150013_007.jpg',
    goodsPrice: 5000,
    goodsName: '펩시 500ml 캔',
    storeName: 'GS25',
  },
];

type HotTrendInfo = {
  id: string | number;
  rank: number;

  hottrendTitle: string;
  hottrendContent: string;
  moreUrl?: string;

  goodsImageUrl: string;
  goodsPrice: number;
  goodsName: string;
  storeName: StoreName;
};

export const hotTrendInfoData: HotTrendInfo[] = [
  {
    id: 1,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/8809196615577.jpg',
    goodsPrice: 5000,
    goodsName: '백종원의 연탄불고기',
    storeName: 'CU',
  },
  {
    id: 2,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/8801007423180.jpg',
    goodsPrice: 5000,
    goodsName: '햇반컵반 강된장 보리비빔밥',
    storeName: 'GS25',
  },
  {
    id: 3,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/MzE2MTE=.jpg',
    goodsPrice: 5000,
    goodsName: '혜장라면',
    storeName: '7ELEVEN',
  },
  {
    id: 4,
    rank: 1,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/671843.jpg',
    goodsPrice: 5000,
    goodsName: '빙그레 딸기타임',
    storeName: 'EMART24',
  },
  {
    id: 5,
    rank: 2,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/GD_2800100153426_001.jpg',
    goodsPrice: 5000,
    goodsName: '캐나다 한끼스테이크',
    storeName: 'CU',
  },
  {
    id: 6,
    rank: 2,
    hottrendTitle: '편의점 오픈런의 주인공, 아사히 생맥!',
    hottrendContent:
      '캔뚜껑이 완전히 열려서 구름 같은 맥주거품이 쌓이는 재미가 포인트!',
    moreUrl: '',
    goodsImageUrl: '/image/GD_8801056150013_007.jpg',
    goodsPrice: 5000,
    goodsName: '펩시 500ml 캔',
    storeName: 'GS25',
  },
];
