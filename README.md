# Handpeon-web

![HTML5](https://img.shields.io/static/v1?style=for-the-badge&message=HTML5&color=E34F26&logo=HTML5&logoColor=FFFFFF&label=) ![CSS3](https://img.shields.io/static/v1?style=for-the-badge&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF&label=) ![Tailwind CSS](https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=) ![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=) ![React](https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label=) ![Next.js](https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label=) ![Turborepo](https://img.shields.io/static/v1?style=for-the-badge&message=Turborepo&color=EF4444&logo=Turborepo&logoColor=FFFFFF&label=) ![Vercel](https://img.shields.io/static/v1?style=for-the-badge&message=Vercel&color=000000&logo=Vercel&logoColor=FFFFFF&label=) ![GitHub](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub&color=181717&logo=GitHub&logoColor=FFFFFF&label=) ![GitHub Actions](https://img.shields.io/static/v1?style=for-the-badge&message=GitHub+Actions&color=2088FF&logo=GitHub+Actions&logoColor=FFFFFF&label=)

> GS25, CU, emart24, 세븐일레븐 편의점에서 다양한 행사나,할인 이벤트를 비교하여 다양하게 볼 수 있는 서비스 입니다.

## Projects

- apps/web : 일반 사용자들에게 보여주는 웹사이트
- apps/admin : 어드민 관리자 사이트
- packages/ui : 디자인 시스템 컴포넌트

## Progress

### 기획 & 디자인

- [x] 메인페이지 이번주 핫트렌드
- [x] 메인페이지 이번주 행사품목
- [ ] 핫트렌드 상세페이지
- [ ] 이번주 행사품목 상세 페이지
- [ ] 검색페이지
- [ ] 추천 콘텐츠
- [ ] 디자인 시스템 설계

### 개발

- [x] 개발 모노래포 환경 세팅
- [x] 개발 프로덕션 배포 CI/CD
- [x] PR 별 프리뷰 CI/CD
- [x] 메인페이지 공통 UI 작업
- [ ] 메인페이지 이번주 핫트렌드
- [ ] 메인페이지 이번주 행사품목

## How to start

```shell
git clone https://github.com/HAND-PEON/handpeon-web.git
cd handpeon-web

yarn install
turbo build
turbo dev
```

## Structure

```
.
├── README.md
├── apps
│   ├── admin
│   └── web
├── node_modules
├── package.json
├── packages
│   ├── eslint-config-custom
│   ├── tailwind-config
│   ├── tsconfig
│   └── ui
├── turbo.json
└── yarn.lock
```
