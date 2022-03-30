import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div className="text-center p-20 mt-20">
      <h1 className='text-6xl font-extrabold mb-8'>Oooooops...</h1>
      <h2 className='text-4xl font-normal mb-6'>That page cannot be found.</h2>
      <p className='text-lg font-medium'>Go back to the <Link href="/"><a className="underline text-blue-400">Homepage</a></Link> </p>
    </div>
  );
}
 
export default NotFound;