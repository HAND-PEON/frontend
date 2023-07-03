'use client';

import Error from 'next/error';
import { redirect, usePathname } from 'next/navigation';

export default function NotFound() {
  const segmentList = usePathname().split('/');

  switch (true) {
    case segmentList.includes('hottrend'):
      return redirect('/hottrend/CU/1');
    case segmentList.includes('event'):
      return redirect('/event/ALL');
    default:
      return <Error statusCode={404} />;
  }
}
