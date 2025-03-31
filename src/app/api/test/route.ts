import { NextResponse } from 'next/server'


const delay = (ms:number) => new Promise((res) => setTimeout(res, ms));
export async function GET(request:Request, response:Response) {
  const randomDelay = Math.floor(Math.random() * 5000);
  console.log(randomDelay)
  throw new Error();
  
  await delay(randomDelay);
  return NextResponse.json({data:`${randomDelay}만에 응답완료 `})
}
