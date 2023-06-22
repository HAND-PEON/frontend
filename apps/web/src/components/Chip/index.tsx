import React from 'react';

const Chip = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="py-[6px] px-[13px] border border-[#1E1C1C] w-min rounded-[20px] hover:cursor-pointer">
          <span className="font-bold truncate">1+1</span>
        </div>
        <div className="py-[6px] px-[13px] border border-[#1E1C1C] w-min rounded-[20px] hover:cursor-pointer">
          <span className="font-bold truncate">1+1</span>
        </div>
        <div className="py-[6px] px-[13px] border border-[#1E1C1C] w-min rounded-[20px] hover:cursor-pointer">
          <span className="font-bold truncate">+덤</span>
        </div>
      </div>
    </>
  );
};

export default Chip;
