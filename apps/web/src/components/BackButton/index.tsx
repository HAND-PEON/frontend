import React from 'react';
import ChevronLeftIcon from '../icons/ChevronLeftIcon';

interface Props {
  onClick?: () => void;
}

const BackButton = ({ onClick }: Props) => {
  return (
    <button className="ml-[_-8px] p-[8px]" onClick={onClick}>
      <ChevronLeftIcon />
    </button>
  );
};

export default BackButton;
