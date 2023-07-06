'use client';

import { getHotTrendDataByCategory, hotTrendDataList } from '@/app/dummy';
import { useRouter } from 'next/navigation';
import { Convenience } from '../types';

interface HotTrendCategoryPageProps {
  params: { category: Convenience };
}

export default function HotTrendCategoryPage({
  params: { category },
}: HotTrendCategoryPageProps) {
  const dateList = getHotTrendDataByCategory(category);
  const router = useRouter();
  return (
    <div className="pt-3">
      <div className="w-full">
        <table className="w-full border-2 border-black">
          <thead>
            <tr className="border-b border-black text-center">
              <th className="p-2">순위</th>
              <th className="p-2">번호</th>
              <th className="p-2">등록일</th>
              <th className="p-2">제목</th>
              <th className="p-2">삭제 </th>
            </tr>
          </thead>
          <tbody>
            {dateList.map((oneData, idx) => (
              <tr
                key={`${oneData.id}-${idx}`}
                className="cursor-pointer text-center hover:bg-slate-300"
                onClick={() =>
                  router.push(`/hottrend/${category}/${oneData.id}`)
                }
              >
                <td className="p-2">
                  <select
                    className="border-2"
                    name="rank"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                    defaultValue={oneData.rank}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="except">제외</option>
                  </select>
                </td>
                <td className="p-2">{oneData.id}</td>
                <td className="p-2">{oneData.createdAt}</td>
                <td className="p-2">{oneData.title}</td>
                <td
                  className="bg-blue-400 p-2 text-center"
                  onClick={(event) => event.stopPropagation()}
                >
                  <button className="w-full" type="button">
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
