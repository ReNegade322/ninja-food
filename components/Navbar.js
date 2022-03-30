import Link from 'next/link'

const Navbar = () => {
  let burgerClass = "text-sm mt-6 hidden md:block"
  const burgerClick = () => {
    if (burgerClass.includes('md:block')) {
      burgerClass.replace('md:block', ' ')
      burgerClass += ' md:hidden'
    } else {
      burgerClass.replace('md:hidden', ' ')
      burgerClass += ' md:block'
    }
  }
  
  return (
    <nav className="text-right">
      <div className="flex justify-between items-center">
        <h1 className="font-bold uppercase p-4 border-b border-gray-100 text-mamoth">
          <a href="#" className="hover:text-gray-800">Food Ninja</a>
        </h1>
        <div className="px-4 cursor-pointer md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => burgerClick()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
      <ul className={burgerClass} id="menu">
        <li className="text-gray-700 font-bold py-1 border-r-4 border-primary">
           <div className="px-4 flex justify-end">
           <Link href="/"><a>Home</a></Link> 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div> 
        </li>
        <li className="py-1 border-r-4 border-white">
           <div className="px-4 flex justify-end">
            <Link href="/about"><a>About</a></Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div> 
        </li>
        <li className="py-1 border-r-4 border-white">
          <div className="px-4 flex justify-end">
            <Link href="/ninjas"><a>Contact</a></Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div> 
        </li>
      </ul>
  </nav>
  );
}
 
export default Navbar;