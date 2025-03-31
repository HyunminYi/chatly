export default async function Card() {
  const res = await fetch('http://localhost:3000/api/test');
  const data = await res.json();
  console.log('Card Component data',data);
  return (
      <>
        <div className="border border-black w-52 h-52 bg-yellow-400">Card Component</div>
      </>
  );
};
