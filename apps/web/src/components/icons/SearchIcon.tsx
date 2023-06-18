import SearchWhite from 'public/icon/icon-search-white.svg';
import SearchBlack from 'public/icon/icon-search-white.svg';

interface SearchIconProps {
  type: 'white' | 'black';
}

export default function SearchIcon({ type }: SearchIconProps) {
  return (
    <>
      {type === 'white' && <SearchWhite />}
      {type === 'black' && <SearchBlack />}
    </>
  );
}
