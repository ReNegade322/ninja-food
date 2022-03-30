import Image from 'next/image'

import CurryPic from '../public/img/curry.jpg'
import StewPic from '../public/img/stew.jpg'
import NoodlesPic from '../public/img/noodles.jpg'

const FoodList = () => {
  return (
    <div>
      <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

      <div className="mt-8 grid lg:grid-cols-3 gap-10">
        {/* cards go here */}
        <div className="card hover:shadow-lg"> 
          <Image 
            src={StewPic}
            alt="stew" 
            className="h-32 sm:h-48 w-full object-cover"
            height={800}
            width={1900}/>
          <div className="m-4">
            <span className="font-bold">5 Bean Chili Stew</span>
            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
          </div>
          <div className="badge flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>                
            <span className='ml-1'>25 mins</span>
          </div>
        </div>
        <div className="card hover:shadow-lg"> 
          <Image 
            src={NoodlesPic} 
            alt="noodles" 
            className="h-32 sm:h-48 w-full object-cover"
            height={800}
            width={1900}/>
          <div className="m-4">
            <span className="font-bold">Veg Noodles</span>
            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
          </div>
          <div className="badge flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            <span className='ml-1'>25 mins</span>
          </div>
        </div>
        <div className="card hover:shadow-lg"> 
          <Image 
            src={CurryPic} 
            alt="curry" 
            className="h-32 sm:h-48 w-full object-cover"
            height={800}
            width={1900}/>
          <div className="m-4">
            <span className="font-bold">Tofu Curry</span>
            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
          </div>
          <div className="badge flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>                  
            <span className='ml-1'>25 mins</span>
          </div>
        </div>
      </div>

      <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

      <div className="mt-8">
        {/* cards go here  */}
      </div>
    </div>
    
  );
}
 
export default FoodList;