import 'ui/styles.css';
import './globals.css';

import localFont from 'next/font/local';
import AppProviders from './appProviders';
import Image from 'next/image';

const pretendard = localFont({
  src: '../../public/font/PretendardVariable.woff2',
});

export const metadata = {
  title: 'HandPyeon',
  description: '편의점 상품을 편리하게 확인해 보세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${pretendard.className} h-ful bg-[#FEF9E5]`}>
        <aside className="fixed left-1/2 z-0 ml-[_-500px] hidden h-full w-[423px] lg:flex lg:items-center">
          <div>
            <div>
              <Image
                src="/image/intro-contents.png"
                alt="intro-contents"
                width={345}
                height={190}
                priority
              />
            </div>
            {/* spacing block */}
            <div className="h-[87px]"></div>
            <div className="relative">
              <Image
                src="/image/handpyeon2.png"
                alt="handpyeon-text"
                width={300}
                height={113}
                priority
              />
              <div className="absolute right-[_-80px] top-[_-65px] h-[84px] w-[84px]">
                <Image
                  src="/image/LeftArrow.png"
                  alt="left-arrow"
                  width={68}
                  height={68}
                  priority
                />
              </div>
              <div className="absolute bottom-[_-130px] left-[_-80px] h-[84px] w-[84px]">
                <Image
                  src="/image/RightArrow.png"
                  alt="right-arrow"
                  width={68}
                  height={68}
                  priority
                />
              </div>
            </div>
          </div>
        </aside>
        <div className="fixed  bottom-0 right-0 hidden lg:block">
          <Image
            src="/image/brand-contents.png"
            alt="brand-contents"
            width={746}
            height={226}
            priority
          />
        </div>
        <main className="flex min-h-full w-full justify-center lg:justify-normal">
          <div className="z-50 flex w-full min-w-[360px] max-w-[390px] flex-col border-x-[1px] border-[#1E1C1C] lg:ml-[55%]">
            <AppProviders>{children}</AppProviders>
          </div>
        </main>
      </body>
    </html>
  );
}
