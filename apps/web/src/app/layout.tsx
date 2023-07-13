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
      <body className={`${pretendard.className} h-full bg-[#FEF9E5]`}>
        <aside className="fixed left-1/2 z-0 ml-[_-500px] hidden h-full w-[423px] lg:flex lg:items-center">
          <div>
            <div>
              <Image
                src="/image/intro-contents.png"
                alt="intro-contents"
                width={423}
                height={232}
                priority
              />
            </div>
            {/* spacing block */}
            <div className="h-[106px]"></div>
            <div className="relative">
              <Image
                src="/image/handpyeon2.png"
                alt="handpyeon-text"
                width={358}
                height={138}
                priority
              />
              <div className="absolute right-[_-80px] top-[_-65px] h-[84px] w-[84px]">
                <Image
                  src="/image/LeftArrow.png"
                  alt="left-arrow"
                  width={84}
                  height={84}
                  priority
                />
              </div>
              <div className="absolute bottom-[_-150px] left-[_-80px] h-[84px] w-[84px]">
                <Image
                  src="/image/RightArrow.png"
                  alt="right-arrow"
                  width={84}
                  height={84}
                  priority
                />
              </div>
            </div>
          </div>
        </aside>
        <div className="fixed  bottom-0 right-0">
          <Image
            src="/image/brand-contents.png"
            alt="brand-contents"
            width={746}
            height={226}
            priority
          />
        </div>
        <main className="flex min-h-full w-full justify-center lg:justify-normal">
          <div className="z-50 flex w-full min-w-[360px] max-w-[390px] flex-col border-[1px] border-[#1E1C1C] lg:ml-[59%]">
            <AppProviders>{children}</AppProviders>
          </div>
        </main>
      </body>
    </html>
  );
}
