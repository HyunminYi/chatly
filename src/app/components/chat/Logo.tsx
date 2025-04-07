import { BASE_URL } from "@/app/constants/routes";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={BASE_URL} className="flex items-center gap-2">
      <Image width={128} height={128} src="/logo.png" alt={`logo`} />
      <h1 className="text-2xl font-bold">CHATLY</h1>
    </Link>
  );
};

export default Logo;
