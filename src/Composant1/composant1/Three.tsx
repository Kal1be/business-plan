import "./three.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDollar, faSatellite } from '@fortawesome/free-solid-svg-icons'
import { faStackExchange } from "@fortawesome/free-brands-svg-icons"
import { faIndustry } from "@fortawesome/free-solid-svg-icons/faIndustry"



function Three() {
  return (
    <div>
      <div className='flex mt-6'>
        <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faSatellite} className='text-center'/>
           Technologie
        </span>
        <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faStackExchange} className='text-center'/>
          Messages
        </span> 
         <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faCommentDollar} className='text-center'/>
           Businesses
        </span> 
         <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faIndustry} className='text-center'/>
           Industries
        </span> 
         
      </div>
      <div className='flex mt-6'>
      <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faSatellite} className='text-center'/>
           Technologie
        </span>
        <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faStackExchange} className='text-center'/>
          Messages
        </span> 
         <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faCommentDollar} className='text-center'/>
           Businesses
        </span> 
         <span className='border rounded-full mx-1 h-36 w-36 p-6  block text-center' id="my-span">
            <FontAwesomeIcon icon={faIndustry} className='text-center'/>
           Industries
        </span> 
        
       
      </div>
    </div>
  )
}

export default Three
