import React from 'react';
import BasicLayout from './BasicLayout';
import HomeIconButton from './HomeIconButton';
import SearchIconButton from './SearchIconButton';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <BasicLayout
      hasBackButton
      headerRight={
        <div className="flex items-center">
          <HomeIconButton />
          <SearchIconButton type="white" />
        </div>
      }
    >
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className="mt-[_-58px] flex w-[230px] flex-col items-center">
          <Image
            src="/image/NotFound.png"
            alt="not-found"
            width={100}
            height={140}
          />
          <div>
            <span className="text-3xl font-bold">Sorry...</span>
          </div>
          <div className="h-[12px]" />
          <div>
            <span className="text-lg font-bold">
              요청한 페이지를 찾을 수 없어요.
            </span>
          </div>
          <div className="h-[30px]" />
          <Link href="/" className="w-full">
            <button className="w-full rounded-[7px] bg-black p-[10px]">
              <span className="font-bold text-white">홈으로 돌아가기</span>
            </button>
          </Link>
        </div>
      </div>
    </BasicLayout>
  );
};

export default NotFoundPage;
