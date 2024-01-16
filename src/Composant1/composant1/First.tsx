import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEllipsisV, faGenderless, faSection } from '@fortawesome/free-solid-svg-icons'
import "./fisrt.css"

function First() {
  return (
    <div className='lg:flex justify-between items-center bg-orange-950 lg:h-[60vh] lg:px-12 py-4 px-4'>
      <div className=' py-12 px-4 rounded-2xl bg-[#f0f0f009] lg:w-64 w-84 my-2 text-white' id='my-div'>
      <p className=''><FontAwesomeIcon icon={faCartPlus} className='rounded-full p-4 bg-[#80808049]'/></p>
      <h2 className='text-2xl font-bold my-4 ' id='element'>Millions of business offering</h2>
      <p id='element'>Explore products and suppliers for
         your business from millions of 
         offerings worldwide.</p>
      </div>
      <div className=' py-12 px-4 rounded-2xl bg-[#f0f0f009] lg:w-64 w-84 my-2 text-white' id='my-div'>
      <p className=''><FontAwesomeIcon icon={faSection} className='rounded-full p-4 bg-[#80808049]'/></p>
      <h2 className='text-2xl font-bold my-4' id='element'>Assured quality and transactions</h2>
      <p id='element'>Explore products and suppliers for
         your business from millions of 
         offerings worldwide.</p>
      </div>
      <div className=' py-12 px-4 rounded-2xl bg-[#f0f0f009] lg:w-64 w-84 my-2 text-white' id='my-div'>
      <p className=''><FontAwesomeIcon icon={faEllipsisV} className='rounded-full p-4 bg-[#80808049]'/></p>
      <h2 className='text-2xl font-bold my-4' id='element'>One-stop trading solution</h2>
      <p id='element'>Explore products and suppliers for
         your business from millions of 
         offerings worldwide.</p>
      </div>
      <div className=' py-12 px-4 rounded-2xl bg-[#f0f0f009] lg:w-64 w-84 my-2 text-white' id='my-div'>
      <p className=''><FontAwesomeIcon icon={faGenderless} className='rounded-full p-4 bg-[#80808049]'/></p>
      <h2 className='text-2xl font-bold my-4' id='element'>Personalized trading experience</h2>
      <p id='element'>Explore products and suppliers for
         your business from millions of 
         offerings worldwide.</p>
      </div>
    </div>
  )
}

export default First
