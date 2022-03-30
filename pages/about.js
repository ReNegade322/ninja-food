import  Head from 'next/head';
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja Food | About</title>
      </Head> 
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
              <h2 className="text-gray-700 text-6xl font-semibold">About</h2>
              <h3 className="text-2xl font-semibold">Ninjas</h3>
            </header>

          </main>
        </div>

      </div>
    </>
  )
}

export default About;