import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="min-h-screen bg-slate-200">
      <ul>
        <li>
          <Link className="inline-block w-full p-5" href="/hottrend">
            이번주 Hot Trend
          </Link>
        </li>
        <li>
          <Link className="inline-block w-full p-5" href="recommendation">
            추천 콘텐츠 (꿀조합)
          </Link>
        </li>
      </ul>
    </div>
  );
}
