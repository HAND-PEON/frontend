'use client';

import Error from 'next/error';
import { redirect, usePathname } from 'next/navigation';

export default function NotFound() {
  const path = usePathname();

  switch (path) {
    case '/hottrend':
      return redirect('/hottrend/CU');
    case '/event':
      return redirect('/event/ALL');
    default:
      return <Error statusCode={404} />;
  }
}
