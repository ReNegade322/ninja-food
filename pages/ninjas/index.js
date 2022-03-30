import Navbar from '../../components/Navbar'
import Link from 'next/link'

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()

  return {
    props: {ninjas: data}
  }
}

const Contact = ({ ninjas }) => {
  return (
    <div className="text-gray-500 font-body">

      <div className="grid md:grid-cols-3">
        <div className="md:col-span-1 md:flex md:justify-end">
          <Navbar />
        </div>

        <main className="px-16 py-6 md:col-span-2 bg-gray-100">
          <div className="flex justify-center md:justify-end">
            <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log in</a>
            <a href="#" className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500 ml-2">Sign up</a>
          </div>

          <header>
            <h2 className="text-gray-700 text-6xl font-semibold">Contact</h2>
            <h3 className="text-2xl font-semibold">Ninjas</h3>
          </header>

          {ninjas.map(ninja => (
            <div key={ninja.id} className='border-solid border-b-2 border-gray-200 hover:border-blue-300'>
              <a className='flex mt-10'>
                <h1 className='text-2xl font-bold pb-2 mr-5'>{ninja.id}.</h1>
                <Link href={'/ninjas/' + ninja.id} passHref><h3 className='text-2xl font-bold pb-2 cursor-pointer'>{ninja.title}</h3></Link>
              </a>
            </div>
          ))}
        </main>
      </div>

    </div>
  )
}

export default Contact;