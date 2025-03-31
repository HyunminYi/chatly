'use client'

const Page = ({params} :{params:{id:string}}) => {
  const handleSubmit = async()=> {
    const res = await fetch(`/api/test/${params.id}`, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:'post test name',
        email:'test email'
      })
    })
    const data = await res.json();
    console.log('data',data);
  }
  
  console.log('mounted')
  return (
      <>
        dashboard 다이나믹 페이지 dummy {params.id}
        <button type="submit" onClick={handleSubmit} className="bg-orange-200">전송</button>
      </>
  );
};

export default Page;
