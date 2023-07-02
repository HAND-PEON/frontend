import React from 'react';

const HotTrendSection = () => {
  const dummy = [
    '통통이 브라우니',
    '고대 초코파이',
    '신발 건조기',
    '연세 크림빵',
    '백종원의 열탄 도시락',
  ];
  return (
    <div>
      <p className="text-[1.375rem]">
        <span>
          이번주 [{' '}
          <span className="px-1 shadow-[inset_0_-0.8rem_0_0_#E2F982]">CU</span>{' '}
          ]
        </span>
        <br /> <span className="font-bold">Hot Trend</span>🔥 어떠세요?
      </p>
      <ul className="flex flex-col gap-[25px] pt-[25px]">
        {dummy.map((item, i) => (
          <li className={i < 3 && `font-bold`} key={i}>
            <div className="flex justify-start gap-5">
              <span>{i + 1}</span>
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotTrendSection;
