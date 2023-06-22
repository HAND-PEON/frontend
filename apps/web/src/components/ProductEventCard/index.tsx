import React from 'react';
import Image from 'next/image';

interface Props {
  imageUrl: string;
}

const ProductEventCard = ({ imageUrl }: Props) => {
  return (
    <div className="w-[164px]">
      <div className="border-2 border-r-[4px] border-b-[4px] border-black w-full h-[164px] p-[5px] rounded-[9px] mb-[12px]">
        <div className="w-full h-full relative flex justify-center items-center">
          <div className="border border-black rounded-[20px] bg-[#73F69D] flex justify-center items-center py-[5px] px-[10px] w-min absolute top-0 left-0 z-10">
            <span className="text-xs font-bold">1+1</span>
          </div>
          <div className="min-w-[150px] max-w-[150px] min-h-[150px] max-h-[150px] rounded-[3px]">
            <Image
              className="rounded-[3px] object-contain"
              src={imageUrl}
              alt="pyeon-event-image"
              fill
            />
          </div>
        </div>
      </div>
      <div className="border border-black rounded-[4px] w-min py-[2px] px-[7px] flex justify-center items-center mb-[8px]">
        <span className="text-xs font-bold">Emart24</span>
      </div>
      <div className="leading-5">
        <div className="truncate">
          <span>백종원의 열탄불고기어쩌구저구저쩌구~~</span>
        </div>
        <div>
          <span className="font-bold">5,000원</span>
        </div>
      </div>
    </div>
  );
};

export default ProductEventCard;
