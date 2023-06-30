import SearchWhite from 'public/icons/icon-search-white.svg';
import SearchBlack from 'public/icons/icon-search-black.svg';

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
