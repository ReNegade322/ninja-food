import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

import CurryPic from '../public/img/curry.jpg'
import StewPic from '../public/img/stew.jpg'
import NoodlesPic from '../public/img/noodles.jpg'


export default function Home() {
  return (  
    <div className='text-gray-600'>   {/*  content wrapper */}
      <div>
        <Navbar />
      </div>    {/*  end nav */}

      <main className='px-16 py-6'>
        <div>
          <a href="#" >Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>

          <div className='mt-8'>
            {/*  cards go here */}
            <div>
              <Image
                src={StewPic}
                alt=""
              />
              <div>
                  <span>5 Bean Chilli Stew</span>
                  <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

          <div className='mt-8'>
            {/*  cards go here */}
          </div>

          <div>
            <div>Load more</div>
          </div>

        </div>
      </main>
    </div>
    
  )
}
