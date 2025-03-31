import { Suspense } from 'react'
import Card from '@/app/components/Card'

const Page = async () => {
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();
  console.log(data)
  return (<>
    dashboard 페이지
    <Suspense fallback={ <div>card1 Loading...</div> }>
      <Card />
    </Suspense>
    <Suspense fallback={ <div>card2 Loading...</div> }>
      <Card />
    </Suspense>
    <Suspense fallback={ <div>card3 Loading...</div> }>
      <Card />
    </Suspense>
    <Suspense fallback={ <div>card4 Loading...</div> }>
      <Card />
    </Suspense>
  </>);
};

export default Page;
