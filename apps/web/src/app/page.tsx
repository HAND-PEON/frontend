import Chip from '@/components/CategoryContainer';
import ChipItem from '@/components/CategoryContainer/ChipItem';
import Image from 'next/image';

const category = ['1+1', '1+2', '1+3'];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chip>
        {category.map((item, index) => (
          <Chip.Item myIndex={index} key={index} text={item} />
        ))}
      </Chip>
    </main>
  );
}
