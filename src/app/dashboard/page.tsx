import { Suspense } from "react";
import Card from "@/app/components/Card";

const Page = async () => {
  const res = await fetch("http://localhost:3000/api/test");
  const data = await res.json();
  console.log(data);
  return <></>;
};

export default Page;
