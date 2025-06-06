import { BASE_URL } from "@/app/constants/routes";
import Link from "next/link";
import Image from "next/image";
import { TITLE } from "@/app/constants/common";

const Logo = () => {
  return (
    <Link
      href={BASE_URL}
      className="flex justify-center gap-2 items-center  rounded-md m-2 p-2 relative"
    >
      <Image width={64} height={64} src="/logo.png" alt={`logo`} />

      <h1 className="text-lg font-bold text-slate-700 relative -bottom-0.5  ">
        {TITLE}
      </h1>
    </Link>
  );
};

export default Logo;
