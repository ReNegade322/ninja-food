import Navbar from '../../components/Navbar'
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  const data = await res.json()
  
  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
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
          <h2 className="text-gray-700 text-6xl font-semibold">Details Page</h2>
        </header>
        <h2 className='text-gray-600 text-3xl font-bold mt-16'>{ninja.title}</h2>
        <p className='text-gray-400 text-lg font-normal mt-5'>{ninja.body }</p>
      </main>
    </div>

  </div>
  );
}
 
export default Details;