import Link from 'next/link';
import { Convenience } from '../types';

const convenienceList: Convenience[] = ['CU', 'GS25', '7Eleven', 'Emart24'];

export default function A({ params: { category }, children }) {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-1">
          {convenienceList.map((convenience) => (
            <Link
              key={convenience}
              className={`rounded-xl border-2 p-3 hover:bg-slate-200 ${
                category === convenience ? 'bg-slate-200' : ''
              }`}
              href={`/hottrend/${convenience}`}
            >
              {convenience}
            </Link>
          ))}
        </div>
        <div>
          <Link href={`/hottrend/${category}/new`}>등록</Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
