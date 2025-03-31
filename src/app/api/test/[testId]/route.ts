import { NextResponse } from 'next/server'

export async function POST(request:Request, {params} :{params:{testId:string}}) {
  const userData = await request.json();
  console.log('server user Data',userData);
  console.log('server params',params.testId);
  return NextResponse.json({message:'response success'})
}
