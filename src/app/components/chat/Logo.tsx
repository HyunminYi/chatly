import { BASE_URL } from "@/app/constants/routes";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={BASE_URL} className="flex items-center gap-2">
      <Image width={40} height={40} src={`/logo.png`} alt={`logo`} />
    </Link>
  );
};

export default Logo;
