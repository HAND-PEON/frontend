import Image from 'next/image';
import Logo from 'public/image/logo.png';

export default function LogoIcon() {
  return <Image src={Logo} alt="logo" width={100} height={32} priority />;
}
