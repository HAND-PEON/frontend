import './globals.css';
import 'ui/styles.css';
import { Inter } from 'next/font/google';
import SideBar from './components/SideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hand-pyeon Admin Page',
  description: 'Hand-pyeon Admin Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
