import 'ui/styles.css';
import './globals.css';

import localFont from 'next/font/local';

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
      <body className={`${pretendard.className} h-full`}>
        <main className="flex min-h-full w-full justify-center">
          <div className="flex min-w-[360px] max-w-[390px] flex-col">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
