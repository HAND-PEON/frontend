'use client';

import SearchInput from '../../components/SearchInput';
import LogoIcon from '../../components/icons/LogoIcon';

export default function Header() {
  return (
    <div className="bg-[#1E1C1C] px-[20px] pb-[19px] pt-[32px]">
      <div>
        <LogoIcon />
      </div>
      <SearchInput disabled placeholder="이번주 할인 상품이 궁금하다면-" />
    </div>
  );
}
