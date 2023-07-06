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
    <div>
      <div className="w-full">
        <table className="w-full border-2 border-black">
          <thead>
            <tr className="border-b border-black text-center">
              <th>순위</th>
              <th>번호</th>
              <th>등록일</th>
              <th>제목</th>
              <th>삭제 </th>
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
                <td>
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
                <td>{oneData.id}</td>
                <td>{oneData.createdAt}</td>
                <td>{oneData.title}</td>
                <td
                  className="text-center "
                  onClick={(event) => event.stopPropagation()}
                >
                  <button className="w-full bg-black" type="button">
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
